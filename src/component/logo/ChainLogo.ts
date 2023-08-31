import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { choose } from 'lit/directives/choose.js';

import { BaseLogo } from './BaseLogo';
import {
  acala,
  basilisk,
  bifrost,
  centrifuge,
  hydradx,
  karura,
  moonbeam,
  phala,
  polkadot,
  statemine,
  interlay,
  zeitgeist,
  assetHub,
  assetHubKusama,
} from './chains';
import { astar, kusama, robonomics, tinkernet } from './assets';

@customElement('uigc-logo-chain')
export class ChainLogo extends BaseLogo {
  @property({ type: String }) chain = null;

  render() {
    return html`
      ${choose(
        this.chain,
        [
          ['acala', () => acala],
          ['astar', () => astar],
          ['basilisk', () => basilisk],
          ['bifrost', () => bifrost],
          ['centrifuge', () => centrifuge],
          ['hydradx', () => hydradx],
          ['interlay', () => interlay],
          ['karura', () => karura],
          ['kusama', () => kusama],
          ['moonbeam', () => moonbeam],
          ['phala', () => phala],
          ['polkadot', () => polkadot],
          ['robonomics', () => robonomics],
          ['statemine', () => assetHubKusama],
          ['assethub-kusama', () => assetHub],
          ['statemint', () => assetHub],
          ['assethub', () => assetHub],
          ['tinkernet', () => tinkernet],
          ['zeitgeist', () => zeitgeist],
        ],
        () => html`<slot name="placeholder"></slot>`
      )}
    `;
  }
}
