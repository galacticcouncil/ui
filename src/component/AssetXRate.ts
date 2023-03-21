import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { UIGCElement } from './base/UIGCElement';

import './AssetInput';
import './icons/Crosshair';

@customElement('uigc-asset-x-rate')
export class AssetXRate extends UIGCElement {
  @property({ type: String }) title = null;
  @property({ type: String }) amount = null;
  @property({ type: String }) amountUsd = null;
  @property({ type: String }) asset = null;

  static styles = [
    UIGCElement.styles,
    css`
      .xrate-root {
        display: flex;
        flex-direction: row;
        background: var(--uigc-asset-transfer-background);
        border-radius: var(--uigc-asset-transfer-border-radius);
        border-bottom: var(--uigc-asset-transfer-border-bottom);
        box-sizing: border-box;
        padding: var(--uigc-asset-x-rate-padding);
        gap: var(--uigc-asset-x-rate-row-gap);
      }

      @media (max-width: 480px) {
        .xrate-root {
          margin: var(--uigc-asset-transfer-margin__sm);
        }
      }

      :host([error]) .xrate-root {
        border: var(--uigc-input__error-border);
        border-width: var(--uigc-input__error-border-width);
        outline: var(--uigc-input__error-outline);
        outline-offset: -1px;
      }

      .xrate-root:focus,
      .xrate-root:focus-visible,
      .xrate-root:focus-within,
      .xrate-root:hover {
        border-bottom: var(--uigc-asset-transfer-border-bottom__hover);
        background: var(--uigc-asset-transfer-background__hover);
        transition: 0.2s ease-in-out;
      }

      .title {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;
      }

      .title > div {
        display: flex;
        flex-direction: row;
        white-space: nowrap;
        align-items: center;
        font-weight: 600;
        font-size: 14px;
        color: #ffffff;
        font-family: 'ChakraPetch';
      }

      uigc-icon-crosshair {
        margin-right: 5px;
      }
    `,
  ];

  render() {
    return html`
      <div class="xrate-root">
        <div class="title">
          <div>
            <uigc-icon-crosshair></uigc-icon-crosshair>
            <span>${this.title}</span>
          </div>
          <slot name="button"></slot>
        </div>
        <uigc-asset-input
          id=${this.id}
          .asset=${this.asset}
          .amount=${this.amount}
          .amountUsd=${this.amountUsd}
        ></uigc-asset-input>
      </div>
    `;
  }
}
