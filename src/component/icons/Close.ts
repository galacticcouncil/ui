import { html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { BaseIcon } from './BaseIcon';

@customElement('icon-close')
export class CloseIcon extends BaseIcon {
  render() {
    return html`
      <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.0462 10.165L1.22266 0.900333"
          stroke="#E5ECF1"
          stroke-width="1.76471"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M10.0462 0.900391L1.22266 10.1651"
          stroke="#E5ECF1"
          stroke-width="1.76471"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    `;
  }
}