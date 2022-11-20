import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BaseIcon } from './BaseIcon';

@customElement('icon-switch')
export class SwitchIcon extends BaseIcon {
  render() {
    return html`
      <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21.5 0C17.2477 0 13.0909 1.26097 9.55523 3.62342C6.01957 5.98587 3.26384 9.34371 1.63656 13.2723C0.00927733 17.2009 -0.416443 21.5239 0.413139 25.6944C1.24272 29.865 3.29035 33.6959 6.29718 36.7028C9.30401 39.7096 13.135 41.7573 17.3056 42.5869C21.4762 43.4165 25.7991 42.9907 29.7277 41.3634C33.6563 39.7361 37.0141 36.9804 39.3766 33.4448C41.739 29.9091 43 25.7523 43 21.5C42.9936 15.7998 40.7263 10.3349 36.6957 6.3043C32.6651 2.27367 27.2002 0.00643278 21.5 0Z"
          fill="#4CF3A8"
          fill-opacity="0.12"
        ></path>
        <path
          d="M21.4851 14.4797L21.4849 28.1054M21.4849 28.1054L16.2259 22.8464M21.4849 28.1054L26.7286 22.8617"
          stroke="#8AFFCB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    `;
  }
}