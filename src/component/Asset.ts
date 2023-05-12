import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';

import { UIGCElement } from './base/UIGCElement';

import './logo/AssetLogo';
import './logo/PlaceholderLogo';

@customElement('uigc-asset')
export class Asset extends UIGCElement {
  @property({ type: String }) symbol = null;
  @property({ type: String }) desc = null;

  static styles = [
    UIGCElement.styles,
    css`
      :host {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: transparent;
        height: 32px;
        border-radius: 8px;
        cursor: pointer;
      }

      span.code {
        font-weight: 700;
        font-size: 16px;
        line-height: 100%;
        color: var(--hex-white);
      }

      span.desc {
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: var(--hex-neutral-gray-400);
        white-space: nowrap;
      }

      span.title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 5px 0px;
        margin-left: 6px;
      }

      uigc-logo-asset,
      uigc-logo-placeholder {
        width: 30px;
      }
    `,
  ];

  render() {
    return html` <uigc-logo-asset fit asset=${this.symbol}>
        <uigc-logo-placeholder fit slot="placeholder"></uigc-logo-placeholder>
      </uigc-logo-asset>
      <span class="title">
        <span class="code">${this.symbol}</span>
        ${when(this.desc, () => html` <span class="desc">${this.desc}</span> `)}
      </span>
      <slot></slot>`;
  }
}
