import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { UIGCElement } from './base/UIGCElement';

import './icons/Switch';

@customElement('uigc-asset-switch')
export class AssetSwitch extends UIGCElement {
  static styles = [
    UIGCElement.styles,
    css`
      .switch-root {
        width: 43px;
        height: 43px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease-in-out 0s;
      }

      .switch-root:hover {
        cursor: pointer;
        transform: var(--uigc-asset-switch-transform);
      }
    `,
  ];

  onSwitchClick(e: any) {
    const options = {
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('asset-switch-clicked', options));
  }

  render() {
    return html`
      <div class="switch-root" @click=${this.onSwitchClick}>
        <uigc-icon-switch></uigc-icon-switch>
      </div>
    `;
  }
}
