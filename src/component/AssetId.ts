import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { UIGCElement } from './base/UIGCElement';

import './logo/AssetLogo';
import './logo/ChainLogo';
import './logo/PlaceholderLogo';

@customElement('uigc-asset-id')
export class AssetId extends UIGCElement {
  @property({ type: String }) symbol = null;
  @property({ type: String }) chain = null;

  static styles = [
    css`
      :host {
        position: relative;
      }

      uigc-logo-chain {
        visibility: hidden;
      }

      :host([chain]) uigc-logo-asset {
        mask: radial-gradient(112% 112% at 84% 16%, transparent 25%, white 25%);
        -webkit-mask: radial-gradient(112% 112% at 84% 16%, transparent 25%, white 25%);
      }

      :host([chain]) uigc-logo-chain {
        visibility: visible;
        position: absolute;
        width: 50%;
        height: 50%;
        right: -10%;
        top: -10%;
      }
    `,
  ];

  render() {
    return html`
      <uigc-logo-asset fit asset=${this.symbol}>
        <uigc-logo-placeholder fit slot="placeholder"></uigc-logo-placeholder>
      </uigc-logo-asset>
      <uigc-logo-chain fit chain=${this.chain}>
        <uigc-logo-placeholder fit slot="placeholder"></uigc-logo-placeholder>
      </uigc-logo-chain>
    `;
  }
}
