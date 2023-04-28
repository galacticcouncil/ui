import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { UIGCElement } from './base/UIGCElement';

import './icons/DropdownAlt';

@customElement('uigc-selector')
export class Selector extends UIGCElement {
  @property({ type: String }) item = null;
  @property({ type: String }) title = null;

  static styles = [
    UIGCElement.styles,
    css`
      :host {
        border-radius: 12px;
        width: 100%;
      }

      button {
        width: 100%;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        cursor: pointer;
        background: var(--uigc-field-background);
        border-radius: var(--uigc-field-border-radius);
        padding: var(--uigc-field-padding);
        row-gap: var(--uigc-field-row-gap);
        border-bottom: var(--uigc-field-border-bottom);
      }

      button > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        align-items: center;
      }

      button:focus,
      button:focus-visible,
      button:focus-within,
      button:hover {
        border-bottom: var(--uigc-selector-border-bottom__hover);
        background: var(--uigc-selector-background__hover);
        transition: 0.2s ease-in-out;
      }

      .title {
        display: flex;
        align-items: center;
        font-weight: var(--uigc-selector--title-font-weight);;
        font-size: var(--uigc-field--title-font-size);
        line-height: var(--uigc-field--title-line-height);
        color: var(--uigc-selector--title-color);
        text-transform: var(--uigc-field--title-text-transform);
      }
    `,
  ];

  onSelectorClick(e: any) {
    const options = {
      bubbles: true,
      composed: true,
      detail: { item: this.item },
    };
    this.dispatchEvent(new CustomEvent('selector-clicked', options));
  }

  render() {
    return html` <button @click=${this.onSelectorClick}>
      <span class="title">${this.title}</span>
      <div>
        <slot></slot>
        <uigc-icon-dropdown-alt></uigc-icon-dropdown-alt>
      </div>
    </button>`;
  }
}
