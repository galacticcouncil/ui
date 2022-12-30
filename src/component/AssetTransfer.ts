import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { UIGCElement } from './base/UIGCElement';

import './AssetInput';
import './AssetSelector';

@customElement('uigc-asset-transfer')
export class AssetTransfer extends UIGCElement {
  @property({ type: String }) id = null;
  @property({ type: String }) title = null;
  @property({ type: String }) balance = null;
  @property({ type: String }) amount = null;
  @property({ type: String }) amountUsd = null;
  @property({ type: String }) asset = null;
  @property({ type: Function }) formatter = null;

  static styles = [
    UIGCElement.styles,
    css`
      .asset-root {
        display: grid;
        background: var(--uigc-asset-transfer-background);
        border-radius: var(--uigc-asset-transfer-border-radius);
        border-bottom: var(--uigc-asset-transfer-border-bottom);
        box-sizing: border-box;
        padding: var(--uigc-asset-transfer-padding);
        row-gap: var(--uigc-asset-transfer-row-gap);
      }

      .asset-root:focus,
      .asset-root:focus-visible,
      .asset-root:focus-within,
      .asset-root:hover {
        border-bottom: var(--uigc-asset-transfer-border-bottom__hover);
        background: var(--uigc-asset-transfer-background__hover);
        transition: 0.2s ease-in-out;
      }

      .asset-root > :nth-child(1) {
        grid-area: 1 / 1 / 2 / 3;
      }

      .asset-root > :nth-child(2) {
        padding-top: 5px;
        grid-area: 3 / 1 / 4 / 3;
      }

      .asset-root > :nth-child(3) {
        grid-area: 2 / 1 / 3 / 3;
      }

      @media (min-width: 768px) {
        .asset-root {
          padding: var(--uigc-asset-transfer-padding__md);
          row-gap: var(--uigc-asset-transfer-row-gap__md);
        }

        .asset-root > :nth-child(1) {
          grid-area: 1 / 1 / 2 / 2;
        }

        .asset-root > :nth-child(2) {
          padding-top: 0;
          grid-area: 1 / 2 / 2 / 3;
        }

        .asset-root > :nth-child(3) {
          grid-area: 2 / 1 / 3 / 3;
        }
      }

      .title {
        display: flex;
        align-items: center;
        font-weight: 600;
        font-size: var(--uigc-asset-transfer--title-font-size);
        line-height: var(--uigc-asset-transfer--title-line-height);
        color: var(--uigc-asset-transfer--title-color);
        text-transform: var(--uigc-asset-transfer--title-text-transform);
      }

      .balance {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: end;
      }

      .balance > span {
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: var(--hex-white);
      }

      .balance > span.label {
        color: rgba(var(--rgb-white), 0.7);
      }

      .max {
        margin-left: 5px;
      }

      .asset {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .asset > *:last-child {
        margin-left: 18px;
      }

      @media (min-width: 768px) {
        .asset > *:last-child {
          margin-left: 23px;
        }
      }
    `,
  ];

  onMaxClick(e: Event) {
    this.amount = this.balance;
    const options = {
      bubbles: true,
      composed: true,
      detail: { id: this.id, asset: this.asset, value: this.amount },
    };
    this.dispatchEvent(new CustomEvent('asset-input-changed', options));
  }

  render() {
    const formatterFn = this.formatter
      ? this.formatter
      : function (val: string) {
          return val;
        };
    return html`
      <div tabindex="0" class="asset-root">
        <span class="title">${this.title}</span>
        <div class="balance">
          <span class="label">Your balance: &nbsp</span>
          <span>${this.balance ? formatterFn(this.balance) : '-'}</span>
          <uigc-button
            class="max"
            variant="max"
            size="micro"
            capitalize
            ?disabled=${this.balance == null}
            @click=${this.onMaxClick}
            >Max</uigc-button
          >
        </div>
        <div class="asset">
          <uigc-asset-selector id=${this.id} .asset=${this.asset}></uigc-asset-selector>
          <uigc-asset-input
            id=${this.id}
            .asset=${this.asset}
            .amount=${this.amount}
            .amountUsd=${this.amountUsd}
          ></uigc-asset-input>
        </div>
      </div>
    `;
  }
}
