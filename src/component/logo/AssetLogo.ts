import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { choose } from 'lit/directives/choose.js';

import { BaseLogo } from './BaseLogo';
import {
  acala,
  apecoin,
  astar,
  basilisk,
  bitcoin,
  centrifuge,
  dai,
  hydraDX,
  ibtc,
  interlay,
  karura,
  kusama,
  lrna,
  phala,
  polkadot,
  robonomics,
  tinkernet,
  usdc,
  usdt,
  wbtc,
  weth,
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
          ['APE', () => apecoin],
          ['ASTR', () => astar],
          ['BSX', () => basilisk],
          ['BTC', () => bitcoin],
          ['CFG', () => centrifuge],
          ['DAI', () => dai],
          ['DOT', () => polkadot],
          ['ETH', () => weth],
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
          ['WBTC', () => wbtc],
          ['WETH', () => weth],
          ['XRT', () => robonomics],
        ],
        () => html`<slot name="placeholder"></slot>`
      )}
    `;
  }
}