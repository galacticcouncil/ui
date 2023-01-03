import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { UIGCElement } from './base/UIGCElement';

@customElement('uigc-circular-progress')
export class CircularProgress extends UIGCElement {
  static styles = css`
    :host {
      --spinner-width: 3px;
    }

    :host([size='small']) .progress-root {
      width: 14px;
      height: 14px;
    }

    :host([size='medium']) .progress-root {
      width: 30px;
      height: 30px;
    }

    :host(:not([size])) .progress-root {
      width: 100%;
      height: 100%;
    }

    .progress-root {
      display: block;
      position: relative;
      border-radius: 9999px;
      -webkit-mask: radial-gradient(
        farthest-side,
        rgba(255, 255, 255, 0) calc(100% - var(--spinner-width)),
        rgba(255, 255, 255, 1) calc(100% - var(--spinner-width) + 1px)
      );
      mask: radial-gradient(
        farthest-side,
        rgba(255, 255, 255, 0) calc(100% - var(--spinner-width)),
        rgba(255, 255, 255, 1) calc(100% - var(--spinner-width) + 1px)
      );
      -webkit-animation: animation-rotate 0.6s linear infinite;
      animation: animation-rotate 0.6s linear infinite;
      overflow: hidden;
      background: var(--uigc-circular-progress-background);
    }

    @keyframes animation-rotate {
      0% {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(-360deg);
        -moz-transform: rotate(-360deg);
        -ms-transform: rotate(-360deg);
        transform: rotate(-360deg);
      }
    }
  `;

  render() {
    return html` <span class="progress-root"></span> `;
  }
}
