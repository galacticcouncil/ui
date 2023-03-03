import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';

import { UIGCElement } from './base/UIGCElement';
import { maskSettings } from './types/AssetInputConfig';
import { debounce } from 'ts-debounce';
import IMask from 'imask';

@customElement('uigc-asset-input')
export class AssetInput extends UIGCElement {
  private _inputHandler = null;
  private _imask = null;

  @property({ type: String }) id = null;
  @property({ type: String }) amount = null;
  @property({ type: String }) amountUsd = null;
  @property({ type: String }) asset = null;
  @property({ type: Boolean }) disabled = false;

  constructor() {
    super();
    this._inputHandler = debounce(this.onInputChanged, 300);
  }

  static styles = [
    UIGCElement.styles,
    css`
      :host {
        width: 100%;
      }

      /* Remove arrows - Chrome, Safari, Edge, Opera */
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Remove arrows - Firefox */
      input[type='number'] {
        -moz-appearance: textfield;
      }

      input:placeholder-shown + .asset-unit {
        color: #c7c7cd;
      }

      /* Placeholder color */
      ::-webkit-input-placeholder {
        color: #c7c7cd;
      }

      ::-moz-placeholder {
        color: #c7c7cd;
      }

      ::-ms-placeholder {
        color: #c7c7cd;
      }

      ::placeholder {
        color: #c7c7cd;
      }

      .asset-root {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        -webkit-box-pack: center;
        justify-content: center;
        padding: var(--uigc-asset-input-padding);
        height: 54px;
        background: var(--uigc-asset-input-background);
        border-style: var(--uigc-asset-input-border-style);
        border-radius: var(--uigc-input-border-radius);
        border-width: var(--uigc-input-border-width);
        border-color: var(--uigc-input-border-color);
      }

      .asset-root:focus-within {
        border-color: var(--uigc-input-border-color__focus);
      }

      .asset-root:hover {
        background: var(--uigc-asset-input-background__hover);
      }

      .asset-field {
        width: 100%;
        display: flex;
        position: relative;
        -webkit-box-align: center;
        align-items: center;
        gap: 4px;
      }

      .asset-input {
        width: 100%;
        background: none;
        border: none;
        color: var(--hex-white);
        font-size: var(--uigc-asset-input-font-size__sm);
        line-height: 24px;
        text-align: right;
        font-weight: 700;
        padding: 0px;
      }

      .asset-unit {
        color: var(--hex-white);
        font-weight: 700;
        font-size: var(--uigc-asset-input-font-size__sm);
        line-height: 24px;
      }

      @media (min-width: 520px) {
        .asset-input {
          font-size: var(--uigc-asset-input-font-size);
        }

        .asset-unit {
          font-size: var(--uigc-asset-input-font-size);
        }
      }

      .usd {
        font-size: 10px;
        line-height: 14px;
        color: var(--hex-neutral-gray-400);
        font-weight: 600;
      }

      #asset-value {
        display: none;
      }
    `,
  ];

  onInputChange(e) {}

  onInputChanged() {
    const unmasked = this._imask.unmaskedValue;
    const masked = this._imask.value;
    const options = {
      bubbles: true,
      composed: true,
      detail: { id: this.id, asset: this.asset, value: unmasked, masked: masked },
    };
    this.dispatchEvent(new CustomEvent('asset-input-changed', options));
  }

  onWrapperClick(e: any) {
    this.shadowRoot.getElementById('asset').focus();
  }

  override update(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('amount') && this._imask) {
      if (this.amount) {
        this._imask.unmaskedValue = this.amount;
      } else {
        this._imask.unmaskedValue = '';
      }
    }
    super.update(changedProperties);
  }

  override async firstUpdated() {
    super.firstUpdated();
    const input = this.shadowRoot.getElementById('asset');
    this._imask = IMask(input, maskSettings);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    if (this._imask) {
      this._imask.destroy();
    }
  }

  render() {
    return html`<div class="asset-root" @click="${this.onWrapperClick}}">
      <span class="asset-field">
        <input
          ?disabled=${!this.asset || this.disabled}
          type="text"
          id="asset"
          class="asset-input"
          placeholder="0"
          value=${this.asset ? this.amount : null}
          @input=${(e: any) => {
            this.onInputChange(e);
            this._inputHandler();
          }}
        />
        <span class="asset-unit">${this.asset}</span>
      </span>
      ${when(this.amountUsd, () => html` <span class="usd">≈ ${this.amountUsd} USD</span> `)}
    </div> `;
  }
}
