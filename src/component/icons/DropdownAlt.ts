import { html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { BaseIcon } from './BaseIcon';

@customElement('uigc-icon-dropdown-alt')
export class DropdownIconAlt extends BaseIcon {
  bsxTemplate() {
    return html`
      <svg bsx xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M7.99414 10.5L11.9994 13.5L16.0046 10.5"
          stroke="rgb(120, 126, 130)"
          stroke-width="2"
          stroke-linecap="square"
        />
      </svg>
    `;
  }

  hdxTemplate() {
    return html`
      <svg hdx xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M7.99414 10.5L11.9994 13.5L16.0046 10.5"
          stroke="rgba(114, 131, 165, 0.6)"
          stroke-width="2"
          stroke-linecap="square"
        />
      </svg>
    `;
  }

  render() {
    return html` ${this.bsxTemplate()} ${this.hdxTemplate()} `;
  }
}
