import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { choose } from 'lit/directives/choose.js';

import { BaseLogo } from './BaseLogo';
import { acala, basilisk, hydra, karura, phala, polkadot } from './chains';

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
          ['hydra', () => hydra],
          ['karura', () => karura],
          ['phala', () => phala],
          ['polkadot', () => polkadot],
        ],
        () => html`<uigc-logo-unknown></uigc-logo-unknown>`
      )}
    `;
  }
}
