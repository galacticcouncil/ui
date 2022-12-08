import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';

import { UIGCElement } from './base/UIGCElement';

import './Asset';

@customElement('uigc-asset-list-item')
export class AssetListItem extends UIGCElement {
  @property({ type: Object }) asset = null;
  @property({ type: String }) balance = null;
  @property({ type: String }) balanceUsd = null;
  @property({ type: Boolean }) disabled = false;

  static styles = [
    UIGCElement.styles,
    css`
      :host([disabled]) {
        opacity: 0.6;
        pointer-events: none;
      }

      :host([selected]) {
        background-color: var(--uigc-asset-list-item__selected-background);
        pointer-events: none;
      }

      .balances {
        display: flex;
        flex-direction: column;
        text-align: right;
      }

      button {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 22px 14px;
        gap: 6px;
        background-color: transparent;
        background: var(--uigc-asset-list-item--button-background);
        width: 100%;
        height: 56px;
        cursor: pointer;
      }

      @media (min-width: 768px) {
        button {
          padding: 22px 28px;
        }
      }

      button:hover {
        background: rgba(var(--rgb-white), 0.06);
      }

      button span.balance {
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        color: var(--hex-white);
      }

      button span.balance-usd {
        font-weight: var(--uigc-asset-list-item--usd-font-weight);
        font-size: 12px;
        line-height: 140%;
        color: var(--uigc-asset-list-item--usd-color);
      }
    `,
  ];

  onAssetClick(e: any) {
    const options = {
      bubbles: true,
      composed: true,
      detail: { ...this.asset },
    };
    this.dispatchEvent(new CustomEvent('asset-clicked', options));
  }

  render() {
    return html` <button @click=${this.onAssetClick} ?disabled=${this.disabled}>
      <uigc-asset .asset=${this.asset.symbol}></uigc-asset>
      <div class="grow"></div>
      <div class="balances">
        <span class="balance">${this.balance || 0} ${this.asset.symbol}</span>
        ${when(this.balanceUsd, () => html` <span class="balance-usd">≈ ${this.balanceUsd} USD</span> `)}
      </div>
    </button>`;
  }
}
