import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { choose } from 'lit/directives/choose.js';

import { BaseLogo } from './BaseLogo';
import { acala, basilisk, hydradx, karura, phala, polkadot, statemine } from './chains';
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
          ['karura', () => karura],
          ['kusama', () => kusama],
          ['phala', () => phala],
          ['polkadot', () => polkadot],
          ['robonomics', () => robonomics],
          ['statemine', () => statemine],
          ['tinkernet', () => tinkernet],
        ],
        () => html`<uigc-logo-unknown></uigc-logo-unknown>`
      )}
    `;
  }
}
