import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { UIGCElement } from './base/UIGCElement';

import './icons/Magnifier';

@customElement('uigc-search-bar')
export class SearchBar extends UIGCElement {
  @property({ type: String }) value = null;
  @property({ type: String }) placeholder = null;

  static styles = [
    UIGCElement.styles,
    css`
      :host {
        width: 100%;
      }

      /* Placeholder color */
      ::-webkit-input-placeholder {
        color: rgba(var(--rgb-primary-100), 0.4);
      }

      ::-moz-placeholder {
        color: rgba(var(--rgb-primary-100), 0.4);
      }

      ::-ms-placeholder {
        color: rgba(var(--rgb-primary-100), 0.4);
      }

      ::placeholder {
        color: rgba(var(--rgb-primary-100), 0.4);
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

      .search-root {
        width: 100%;
        display: flex;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        padding: 0 14px;
        height: 54px;
        background: rgba(var(--rgb-primary-100), 0.06);
        border-radius: 9px;
        border: 1px solid rgba(var(--rgb-white), 0.12);
        box-sizing: border-box;
      }

      .search-root > uigc-icon-magnifier {
        margin-right: 8px;
        width: 22px;
      }

      .search-root:focus-within {
        border: 1px solid var(--hex-primary-300);
      }

      .search-root:hover {
        background: rgba(var(--rgb-white), 0.12);
      }
    `,
  ];

  onInputChange(e: any) {
    this.value = e.target.value;
    const options = {
      bubbles: true,
      composed: true,
      detail: { value: this.value },
    };
    this.dispatchEvent(new CustomEvent('search-changed', options));
  }

  override async firstUpdated() {
    const input = this.shadowRoot.querySelector('input');
    input.setAttribute('placeholder', this.placeholder);
  }

  render() {
    return html`
      <div class="search-root">
        <uigc-icon-magnifier></uigc-icon-magnifier>
        <input type="text" .value="${this.value}" @input=${this.onInputChange} />
      </div>
    `;
  }
}