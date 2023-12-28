import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { choose } from 'lit/directives/choose.js';

import { BaseLogo } from './BaseLogo';
import {
  acala,
  apecoin,
  astar,
  basilisk,
  bifrost,
  bitcoin,
  centrifuge,
  dai,
  hydraDX,
  ibtc,
  interlay,
  karura,
  kusama,
  lrna,
  moonbeam,
  nodle,
  phala,
  polkadot,
  robonomics,
  subsocial,
  tinkernet,
  unique,
  usdc,
  usdt,
  voucherDOT,
  voucherKSM,
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
        this.asset && this.asset.toUpperCase(),
        [
          ['AUSD', () => acala],
          ['ACA', () => acala],
          ['APE', () => apecoin],
          ['ASTR', () => astar],
          ['BNC', () => bifrost],
          ['BSX', () => basilisk],
          ['BTC', () => bitcoin],
          ['CFG', () => centrifuge],
          ['DAI', () => dai],
          ['DOT', () => polkadot],
          ['ETH', () => weth],
          ['GLMR', () => moonbeam],
          ['HDX', () => hydraDX],
          ['IBTC', () => ibtc],
          ['INTR', () => interlay],
          ['KAR', () => karura],
          ['KSM', () => kusama],
          ['LRNA', () => lrna],
          ['NODL', () => nodle],
          ['PHA', () => phala],
          ['TNKR', () => tinkernet],
          ['SUB', () => subsocial],
          ['UNQ', () => unique],
          ['USDC', () => usdc],
          ['USDCET', () => usdc],
          ['USDT', () => usdt],
          ['VDOT', () => voucherDOT],
          ['VKSM', () => voucherKSM],
          ['ZTG', () => zeitgeist],
          ['WBTC', () => wbtc],
          ['WETH', () => weth],
          ['WUSDT', () => usdt],
          ['XRT', () => robonomics],
        ],
        () => html`<slot name="placeholder"></slot>`
      )}
    `;
  }
}
