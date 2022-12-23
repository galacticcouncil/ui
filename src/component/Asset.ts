import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { UIGCElement } from './base/UIGCElement';
import './logo/AssetLogo';

import { AssetType, AssetTypes } from './types/AssetType';

const KNOWN_ASSETS = AssetType.getMap(AssetTypes);

@customElement('uigc-asset')
export class Asset extends UIGCElement {
  @property({ type: String }) asset = null;

  static styles = [
    UIGCElement.styles,
    css`
      :host {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 6px;
        background-color: transparent;
        height: 52px;
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
      }
    `,
  ];

  render() {
    const assetDesc = KNOWN_ASSETS.get(this.asset) || '--';
    return html` <uigc-logo-asset fit asset=${this.asset}></uigc-logo-asset>
      <span class="title">
        <span class="code">${this.asset}</span>
        <span class="desc">${assetDesc}</span>
      </span>
      <slot></slot>`;
  }
}
