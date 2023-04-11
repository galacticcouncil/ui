import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { choose } from 'lit/directives/choose.js';

import { BaseLogo } from './BaseLogo';
import { acala, basilisk, hydradx, karura, phala, polkadot, statemine, interlay } from './chains';
import { kusama, robonomics, tinkernet } from './assets';

@customElement('uigc-logo-chain')
export class ChainLogo extends BaseLogo {
  @property({ type: String }) chain = null;

  render() {
    return html`
      ${choose(
        this.chain,
        [
          ['acala', () => acala],
          ['basilisk', () => basilisk],
          ['hydradx', () => hydradx],
          ['interlay', () => interlay],
          ['karura', () => karura],
          ['kusama', () => kusama],
          ['phala', () => phala],
          ['polkadot', () => polkadot],
          ['robonomics', () => robonomics],
          ['statemine', () => statemine],
          ['statemint', () => statemine],
          ['tinkernet', () => tinkernet],
        ],
        () => html`<slot name="placeholder"></slot>`
      )}
    `;
  }
}
