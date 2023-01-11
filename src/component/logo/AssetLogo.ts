import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { choose } from 'lit/directives/choose.js';

import { BaseLogo } from './BaseLogo';
import './unknown';
import {
  acala,
  basilisk,
  bitcoin,
  dai,
  eth,
  hydraDX,
  karura,
  kusama,
  lrna,
  phala,
  polkadot,
  tinkernet,
} from './assets';

@customElement('uigc-logo-asset')
export class AssetLogo extends BaseLogo {
  @property({ type: String }) asset = null;

  render() {
    return html`
      ${choose(
        this.asset,
        [
          ['aUSD', () => acala],
          ['ACA', () => acala],
          ['BSX', () => basilisk],
          ['BTC', () => bitcoin],
          ['DAI', () => dai],
          ['DOT', () => polkadot],
          ['ETH', () => eth],
          ['HDX', () => hydraDX],
          ['KAR', () => karura],
          ['KSM', () => kusama],
          ['LRNA', () => lrna],
          ['PHA', () => phala],
          ['TNKR', () => tinkernet],
          ['WBTC', () => bitcoin],
          ['WETH', () => eth],
        ],
        () => html`<uigc-logo-unknown></uigc-logo-unknown>`
      )}
    `;
  }
}
