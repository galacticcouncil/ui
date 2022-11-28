import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { UIGCElement } from './base/UIGCElement';

@customElement('uigc-button')
export class Button extends UIGCElement {
  static styles = [
    UIGCElement.styles,
    css`
      :host([size='small']) .button-root {
        padding: 12px 15px;
        font-size: 12px;
      }

      :host(:not([size])) .button-root,
      :host([size='medium']) .button-root {
        padding: 16px 36px;
        font-size: 14px;
      }

      :host([size='micro']) .button-root {
        padding: 2px 10px;
        font-size: 12px;
        line-height: 16px;
      }

      :host([fullwidth]) .button-root {
        width: 100%;
      }

      :host([disabled]) {
        opacity: 0.2;
        pointer-events: none;
      }

      :host([variant='primary']) .button-root {
        color: var(--uigc-button__primary-color);
        background: var(--uigc-button__primary-background);
      }

      :host([variant='primary']) .button-root:hover {
        background: var(--uigc-button__primary-background__hover);
        transition: 0.2s ease-in-out;
      }

      :host([variant='secondary']) .button-root {
        color: var(--uigc-button__secondary-color);
        background: var(--uigc-button__secondary-background);
        border: var(--uigc-button__secondary-border);
      }

      :host([variant='secondary']) .button-root:hover {
        color: var(--uigc-button__secondary-color__hover);
        background: var(--uigc-button__secondary-background__hover);
        border: var(--uigc-button__secondary-border__hover);
      }

      :host([variant='max']) .button-root {
        color: #fff;
        background: rgba(var(--rgb-white), 0.06);
        font-weight: 600;
        text-transform: var(--uigc-button__max-text-transform);
      }

      :host([variant='max']) .button-root:hover {
        background: rgba(var(--rgb-white), 0.15);
      }

      .button-root {
        border-radius: var(--uigc-button-border-radius);
        font-weight: 700;
        font-size: 16px;
        border: none;
        cursor: pointer;
        text-transform: uppercase;
        line-height: 18px;
      }
    `,
  ];

  render() {
    return html`
      <button type="button" class="button-root">
        <slot name="icon"></slot>
        <slot></slot>
      </button>
    `;
  }
}
