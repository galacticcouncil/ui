import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { UIGCElement } from './base/UIGCElement';

@customElement('uigc-switch')
export class Switch extends UIGCElement {
  @property({ type: Boolean, reflect: true }) checked = false;

  static styles = [
    UIGCElement.styles,
    css`
      :host([size='small']) .switch-root {
        width: 46px;
        height: 24px;
      }

      :host([size='small']) .switch-thumb {
        width: 20px;
        height: 20px;
        border-width: 1px;
      }

      :host(:not([size])) .switch-root,
      :host([size='medium']) .switch-root {
        width: 70px;
        height: 38px;
      }

      :host(:not([size])) .switch-thumb,
      :host([size='medium']) .switch-thumb {
        width: 34px;
        height: 34px;
        border-width: 1px;
      }

      .switch-root {
        position: relative;
        border-radius: 45px;
        border: var(--uigc-switch--root-border);
        background: var(--uigc-switch--root-background);
        cursor: pointer;
      }

      .switch-root:hover > span.switch-thumb {
        border-color: var(--uigc-switch--thumb-border-color__hover);
      }

      .switch-thumb {
        position: absolute;
        border-radius: 50%;
        top: 1px;
        left: 1px;
        border-color: var(--uigc-switch--thumb-border-color);
        background: var(--uigc-switch--thumb-background);
        border-style: solid;
      }

      :host([checked]) .switch-root {
        background: var(--uigc-switch__checked--root-background);
        border: var(--uigc-switch__checked--root-border);
      }

      :host([checked]) .switch-thumb {
        left: initial;
        right: 1px;
        background: var(--uigc-switch__checked--thumb-background);
        border-color: var(--uigc-switch__checked--thumb-border-color);
      }

      :host([disabled]) .switch-root {
        pointer-events: none;
      }

      :host([disabled]) .switch-thumb {
        background: var(--hex-background-gray-800);
      }
    `,
  ];

  override async updated() {
    const switchRoot = this.shadowRoot.querySelector('.switch-root');
    if (this.checked) {
      switchRoot.removeAttribute('checked');
    } else {
      switchRoot.setAttribute('checked', '');
    }
  }

  render() {
    return html`
      <div class="switch-root">
        <span class="switch-thumb"></span>
      </div>
    `;
  }
}
