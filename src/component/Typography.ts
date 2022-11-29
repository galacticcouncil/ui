import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { UIGCElement } from './base/UIGCElement';

@customElement('uigc-typography')
export class Typography extends UIGCElement {
  static styles = [
    UIGCElement.styles,
    css`
      :host([color='primary']) {
        color: var(--uigc-app-font-color__primary);
      }

      :host([color='secondary']) {
        color: var(--uigc-app-font-color__secondary);
      }

      :host([color='gradient']) {
        background: var(--uigc-app-font-color__gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      :host([variant='title']) {
        font-family: var(--uigc-app-font-secondary);
        background: var(--uigc-typography__title-background);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      :host([variant='section']) {
        font-family: var(--uigc-app-font-secondary);
      }
    `,
  ];

  render() {
    return html` <slot> </slot> `;
  }
}
