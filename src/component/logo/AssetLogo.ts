import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { choose } from 'lit/directives/choose.js';

import { BaseLogo } from './BaseLogo';
import './unknown';
import { acala, basilisk, bitcoin, dai, eth, hydraDX, karura, kusama, phala, polkadot, tinkernet } from './assets';

@customElement('uigc-logo-asset')
export class AssetLogo extends BaseLogo {
  @property({ type: String }) asset = null;

  render() {
    return html`
      ${choose(
        this.asset,
        [
          ['aUSD', () => acala],
          ['BSX', () => basilisk],
          ['BTC', () => bitcoin],
          ['ETH', () => eth],
          ['HDX', () => hydraDX],
          ['KSM', () => kusama],
          ['PHA', () => phala],
          ['TNKR', () => tinkernet],
          ['KAR', () => karura],
          ['DAI', () => dai],
          ['DOT', () => polkadot],
        ],
        () => html`<uigc-logo-unknown></uigc-logo-unknown>`
      )}
    `;
  }
}
