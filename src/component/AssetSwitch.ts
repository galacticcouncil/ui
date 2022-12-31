import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { UIGCElement } from './base/UIGCElement';

import './icons/Switch';
import './icons/Arrow';

@customElement('uigc-asset-switch')
export class AssetSwitch extends UIGCElement {
  static styles = [
    UIGCElement.styles,
    css`
      :host([basic]) uigc-icon-arrow {
        display: block;
      }

      :host(:not([basic])) uigc-icon-switch {
        display: block;
      }

      .switch-root {
        width: 43px;
        height: 43px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      uigc-icon-switch,
      uigc-icon-arrow {
        display: none;
        transition: var(--uigc-asset-switch-transition);
      }

      .switch-root:hover > uigc-icon-switch,
      .switch-root:hover > uigc-icon-arrow {
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
        <uigc-icon-arrow></uigc-icon-arrow>
      </div>
    `;
  }
}
