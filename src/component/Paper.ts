import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { UIGCElement } from './base/UIGCElement';

@customElement('uigc-paper')
export class Paper extends UIGCElement {
  static styles = [
    UIGCElement.styles,
    css`
      :host {
        background: var(--uigc-paper-background);
        box-shadow: var(--uigc-paper-box-shadow);
      }

      ::slotted(*) {
        width: 100%;
      }
    `,
  ];

  render() {
    return html` <slot></slot> `;
  }
}
