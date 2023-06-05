import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { UIGCElement } from './base/UIGCElement';
import { numberMaskSettings, textMask } from './types/InputConfig';
import { debounce } from 'ts-debounce';
import IMask from 'imask';

@customElement('uigc-textfield')
export class Textfield extends UIGCElement {
  private _inputHandler = null;
  private _imask = null;

  @property({ type: String }) id = null;
  @property({ type: String }) value = null;
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) number = false;

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

      .textfield-root {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 54px;
        border-radius: var(--uigc-input-border-radius);
        border-width: var(--uigc-input-border-width);
        border-color: var(--uigc-input-border-color);
      }

      :host([field]) .textfield-root {
        flex-direction: row;
        background: var(--uigc-textfield__field-background);
        border-width: var(--uigc-textfield__field-border-width);
        border-color: var(--uigc-textfield__field-border-color);
        border-style: solid;
        box-sizing: border-box;
        padding: var(--uigc-field-padding);
      }

      :host([disabled]) .textfield-root {
        border-width: 0;
      }

      :host(:not([disabled]):not([field])) .textfield-root {
        padding: var(--uigc-textfield-padding);
        background: var(--uigc-textfield-background);
        border-style: var(--uigc-textfield-border-style);
      }

      :host(:not([disabled]):not([field])) .textfield-root:focus-within {
        border-color: var(--uigc-input-border-color__focus);
      }

      :host(:not([disabled]):not([field])) .textfield-root:hover {
        background: var(--uigc-textfield-background__hover);
      }

      :host([field]:not([disabled])) .textfield-root:focus,
      :host([field]:not([disabled])) .textfield-root:focus-visible,
      :host([field]:not([disabled])) .textfield-root:focus-within,
      :host([field]:not([disabled])) .textfield-root:hover {
        border-color: var(--uigc-textfield__field-border-color__hover);
        background: var(--uigc-textfield__field-background__hover);
        transition: 0.2s ease-in-out;
      }

      .textfield-wrapper {
        width: 100%;
      }

      .textfield-field {
        width: 100%;
        display: flex;
        position: relative;
        -webkit-box-align: center;
        align-items: center;
        gap: 4px;
      }

      .textfield {
        width: 100%;
        background: none;
        border: none;
        color: var(--hex-white);
        font-size: var(--uigc-textfield-font-size__sm);
        line-height: 24px;
        text-align: right;
        font-weight: 700;
        padding: 0px;
      }

      @media (min-width: 520px) {
        .textfield {
          font-size: var(--uigc-textfield-font-size);
        }
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
      detail: { value: unmasked, masked: masked },
    };
    this.dispatchEvent(new CustomEvent('input-changed', options));
  }

  onWrapperClick(e: any) {
    this.shadowRoot.getElementById('textField').focus();
  }

  override update(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('value') && this._imask) {
      if (this.value) {
        this._imask.unmaskedValue = this.value;
      } else {
        this._imask.unmaskedValue = '';
      }
    }
    super.update(changedProperties);
  }

  override async firstUpdated() {
    super.firstUpdated();
    const input = this.shadowRoot.getElementById('textField');
    const maskOpts = this.number ? numberMaskSettings : { mask: textMask };
    this._imask = IMask(input, maskOpts);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    if (this._imask) {
      this._imask.destroy();
    }
  }

  render() {
    return html`
      <div class="textfield-root" @click="${this.onWrapperClick}}">
        <slot name="inputAdornment"></slot>
        <div class="textfield-wrapper">
          <span class="textfield-field">
            <input
              type="text"
              class="textfield"
              id="textField"
              value=${this.value}
              @input=${(e: any) => {
                this.onInputChange(e);
                this._inputHandler();
              }}
            />
            <slot name="endAdornment"></slot>
          </span>
        </div>
      </div>
    `;
  }
}
