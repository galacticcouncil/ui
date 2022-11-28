import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { UIGCElement } from './base/UIGCElement';

@customElement('uigc-icon-button')
export class IconButton extends UIGCElement {
  static styles = [
    UIGCElement.styles,
    css`
      :host([size='small']) .icon-button-root {
        width: 24px;
        height: 24px;
      }

      :host(:not([size])) .icon-button-root,
      :host([size='medium']) .icon-button-root {
        width: 40px;
        height: 40px;
      }

      :host([size='large']) .icon-button-root {
        width: 50px;
        height: 50px;
      }

      .icon-button-root {
        display: flex;
        justify-content: center;
        align-items: center;
        border: var(--uigc-icon-button-border);
        border-radius: var(--uigc-icon-button-border-radius);
        background: var(--uigc-icon-button-background);
        transition: all 0.3s ease-in-out 0s;
      }

      .icon-button-root:hover {
        background: var(--uigc-icon-button-background__hover);
        border: var(--uigc-icon-button-border__hover);
        cursor: pointer;
      }
    `,
  ];

  render() {
    return html`
      <button class="icon-button-root">
        <slot></slot>
      </button>
    `;
  }
}