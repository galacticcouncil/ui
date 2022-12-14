import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';

import { UIGCElement } from './base/UIGCElement';

import './icons/Identity';
import './icons/Paste';
import './icons/Close';
import './IconButton';

@customElement('uigc-address-input')
export class AddressInput extends UIGCElement {
  @property({ type: String }) title = null;
  @property({ type: String }) address = null;
  @property({ type: String }) error = null;

  static styles = [
    UIGCElement.styles,
    css`
      .address-root {
        display: grid;
        background: var(--uigc-asset-transfer-background);
        border-radius: var(--uigc-asset-transfer-border-radius);
        border-bottom: var(--uigc-asset-transfer-border-bottom);
        box-sizing: border-box;
        padding: var(--uigc-asset-transfer-padding);
        row-gap: var(--uigc-asset-transfer-row-gap);
      }

      :host([error]) .address-root {
        border-bottom: 1px solid var(--hex-red-400); // TODO: BSX scheme
      }

      .address-root:focus,
      .address-root:focus-visible,
      .address-root:focus-within,
      .address-root:hover {
        border-bottom: var(--uigc-asset-transfer-border-bottom__hover);
        background: var(--uigc-asset-transfer-background__hover);
        transition: 0.2s ease-in-out;
      }

      @media (min-width: 768px) {
        .address-root {
          padding: var(--uigc-asset-transfer-padding__md);
        }
      }

      /* Placeholder color */
      ::-webkit-input-placeholder {
        color: var(--uigc-address-input__placeholder-color);
      }

      ::-moz-placeholder {
        color: var(--uigc-address-input__placeholder-color);
      }

      ::-ms-placeholder {
        color: var(--uigc-address-input__placeholder-colorr);
      }

      ::placeholder {
        color: var(--uigc-address-input__placeholder-color);
      }

      .title {
        display: flex;
        align-items: center;
        font-weight: 600;
        font-size: var(--uigc-asset-transfer--title-font-size);
        line-height: var(--uigc-asset-transfer--title-line-height);
        color: var(--uigc-asset-transfer--title-color);
        text-transform: var(--uigc-asset-transfer--title-text-transform);
      }

      .address {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .address-error {
        color: var(--hex-red-400); // TODO: BSX scheme
        line-height: 16px;
        margin-top: 2px;
        font-size: 12px;
      }

      .input-root {
        width: 100%;
        display: flex;
        flex-direction: column;
        -webkit-box-pack: center;
        justify-content: center;
        box-sizing: border-box;
        padding: 0 14px;
        min-height: 54px;
      }

      .input-root p {
        font-weight: 500;
        color: rgb(133, 209, 255);
        font-size: 12px;
        line-height: 16px;
        text-align: left;
        overflow-wrap: break-word;
        word-break: break-word;
      }

      input {
        width: 100%;
        background: none;
        border: none;
        color: var(--hex-white);
        font-weight: 500;
        font-size: 14px;
        line-height: 100%;
        padding: 0px;
        box-sizing: border-box;
      }

      uigc-icon-paste {
        cursor: pointer;
      }
    `,
  ];

  onInputClear() {
    this.address = null;
    const options = {
      bubbles: true,
      composed: true,
      detail: { address: null },
    };
    this.dispatchEvent(new CustomEvent('address-input-changed', options));
  }

  onInputChange(e: any) {
    this.address = e.target.value;
    const options = {
      bubbles: true,
      composed: true,
      detail: { address: this.address },
    };
    this.dispatchEvent(new CustomEvent('address-input-changed', options));
  }

  async onPasteClick() {
    this.address = await navigator.clipboard.readText();
    const options = {
      bubbles: true,
      composed: true,
      detail: { address: this.address },
    };
    this.dispatchEvent(new CustomEvent('address-input-changed', options));
  }

  render() {
    return html`
      <div tabindex="0" class="address-root">
        <span class="title">${this.title}</span>
        <div class="address">
          <uigc-icon-id></uigc-icon-id>
          <div class="input-root">
            <input
              type="text"
              .value=${this.address}
              placeholder="Paste recipient address here"
              @input=${(e: any) => this.onInputChange(e)}
            />
          </div>
          ${when(
            this.address,
            () => html`
              <uigc-icon-button size="small">
                <uigc-icon-close @click=${() => this.onInputClear()}></uigc-icon-close>
              </uigc-icon-button>
            `,
            () => html` <uigc-icon-paste @click=${() => this.onPasteClick()}></uigc-icon-paste> `
          )}
        </div>
      </div>
      <p class="address-error">${this.error}</p>
    `;
  }
}
