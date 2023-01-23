import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { choose } from 'lit/directives/choose.js';

import { BaseLogo } from './BaseLogo';
import './unknown';
import {
  acala,
  astar,
  basilisk,
  bitcoin,
  dai,
  eth,
  hydraDX,
  ibtc,
  interlay,
  karura,
  kusama,
  lrna,
  phala,
  polkadot,
  tinkernet,
  usdc,
  usdt,
  zeitgeist,
} from './assets';

@customElement('uigc-logo-asset')
export class AssetLogo extends BaseLogo {
  @property({ type: String }) asset = null;

  render() {
    return html`
      ${choose(
        this.asset.toUpperCase(),
        [
          ['AUSD', () => acala],
          ['ACA', () => acala],
          ['ASTR', () => astar],
          ['BSX', () => basilisk],
          ['BTC', () => bitcoin],
          ['DAI', () => dai],
          ['DOT', () => polkadot],
          ['ETH', () => eth],
          ['HDX', () => hydraDX],
          ['IBTC', () => ibtc],
          ['INTR', () => interlay],
          ['KAR', () => karura],
          ['KSM', () => kusama],
          ['LRNA', () => lrna],
          ['PHA', () => phala],
          ['TNKR', () => tinkernet],
          ['USDC', () => usdc],
          ['USDT', () => usdt],
          ['ZTG', () => zeitgeist],
          ['WBTC', () => bitcoin],
          ['WETH', () => eth],
        ],
        () => html`<uigc-logo-unknown></uigc-logo-unknown>`
      )}
    `;
  }
}
