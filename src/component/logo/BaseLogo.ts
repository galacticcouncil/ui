import { css, LitElement } from 'lit';

export class BaseLogo extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
      }

      :host svg {
        width: 34px;
        height: 34px;
      }

      :host svg[bsx] {
        display: var(--uigc-bsx-icon-display);
      }

      :host svg[hdx] {
        display: var(--uigc-hdx-icon-display);
      }
    `,
  ];
}
