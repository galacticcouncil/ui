import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';

import { UIGCElement } from './base/UIGCElement';

import './AssetInput';
import './AssetSelector';

@customElement('uigc-asset-transfer')
export class AssetTransfer extends UIGCElement {
  @property({ type: String }) id = null;
  @property({ type: String }) title = null;
  @property({ type: String }) amount = null;
  @property({ type: String }) amountUsd = null;
  @property({ type: String }) asset = null;
  @property({ type: String }) error = null;
  @property({ type: Boolean }) selectable = true;
  @property({ type: Boolean }) readonly = false;

  static styles = [
    UIGCElement.styles,
    css`
      .asset-root {
        display: grid;
        margin: none;
        background: var(--uigc-asset-transfer-background);
        border-radius: var(--uigc-asset-transfer-border-radius);
        border-bottom: var(--uigc-asset-transfer-border-bottom);
        box-sizing: border-box;
        padding: var(--uigc-asset-transfer-padding);
        row-gap: var(--uigc-asset-transfer-row-gap);
      }

      @media (max-width: 480px) {
        .asset-root {
          margin: var(--uigc-asset-transfer-margin__sm);
        }
      }

      :host([error]) .asset-root {
        border: var(--uigc-input__error-border);
        border-width: var(--uigc-input__error-border-width);
        outline: var(--uigc-input__error-outline);
        outline-offset: -1px;
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
        grid-area: 1 / 1 / 2 / 2;
      }

      .asset-root > :nth-child(2) {
        padding-top: 0;
        grid-area: 1 / 2 / 2 / 3;
      }

      .asset-root > :nth-child(3) {
        grid-area: 2 / 1 / 3 / 3;
      }

      .asset-error {
        color: var(--uigc-input__error-color);
        line-height: 16px;
        margin-top: 2px;
        font-size: 12px;
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

      .asset {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .asset_ro {
        padding: 0 6px;
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

  render() {
    return html`
      <div tabindex="0" class="asset-root">
        <span class="title">${this.title}</span>
        <slot name="balance"></slot>
        <div class="asset">
          ${when(
            this.selectable,
            () => html` <uigc-asset-selector id=${this.id} .asset=${this.asset}></uigc-asset-selector> `,
            () => html` <uigc-asset class="asset_ro" .symbol=${this.asset}></uigc-asset>`
          )}
          <uigc-asset-input
            id=${this.id}
            .asset=${this.asset}
            .amount=${this.amount}
            .amountUsd=${this.amountUsd}
            ?disabled=${this.readonly}
          ></uigc-asset-input>
        </div>
      </div>
      <p class="asset-error">${this.error}</p>
    `;
  }
}
