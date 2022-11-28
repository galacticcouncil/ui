import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BaseIcon } from './BaseIcon';

@customElement('uigc-icon-success')
export class SuccessIcon extends BaseIcon {
  bsxTemplate() {
    return html`<svg bsx xmlns="http://www.w3.org/2000/svg" width="30px" height="29px" viewBox="0 0 30 29" fill="none">
      <circle cx="14.9995" cy="14.145" r="14.0112" fill="url(#paint0_linear_13185_9479)" fill-opacity="0.3" />
      <path
        d="M10.4648 15.2601L13.8537 18.649L21.0081 11.1182"
        stroke="url(#paint1_linear_13185_9479)"
        stroke-width="2.43673"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.4648 15.2601L13.8537 18.649L21.0081 11.1182"
        stroke="url(#paint2_linear_13185_9479)"
        stroke-width="2.43673"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.4648 15.2601L13.8537 18.649L21.0081 11.1182"
        stroke="url(#paint3_linear_13185_9479)"
        stroke-width="2.43673"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_13185_9479"
          x1="14.9995"
          y1="-13.3982"
          x2="14.9995"
          y2="44.0001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#4FFFB0" stop-opacity="0" />
          <stop offset="0.264426" stop-color="#4FFFB0" stop-opacity="0.14" />
          <stop offset="0.59633" stop-color="#2EFFA1" />
          <stop offset="0.751279" stop-color="#FFE668" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_13185_9479"
          x1="10.5992"
          y1="6.64671"
          x2="21.4446"
          y2="6.64671"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFCE4F" />
          <stop offset="1" stop-color="#4FFFB0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_13185_9479"
          x1="10.5992"
          y1="6.64671"
          x2="21.4446"
          y2="6.64671"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#4FFFB0" />
          <stop offset="0.505223" stop-color="#A2FF76" />
          <stop offset="1" stop-color="#FF984E" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_13185_9479"
          x1="10.5992"
          y1="6.64671"
          x2="21.4446"
          y2="6.64671"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#4FFFB0" />
          <stop offset="0.463556" stop-color="#B3FF8F" />
          <stop offset="1" stop-color="#FF984E" />
        </linearGradient>
      </defs>
    </svg>`;
  }

  hdxTemplate() {
    return html` <svg hdx xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="9.59961" y="17.1415" width="3.73333" height="3.73333" fill="#00FFA0" />
      <rect x="13.333" y="20.8748" width="3.73333" height="3.73333" fill="#00FFA0" />
      <rect
        x="24.5332"
        y="13.4081"
        width="3.73333"
        height="3.73333"
        transform="rotate(90 24.5332 13.4081)"
        fill="#00FFA0"
      />
      <rect
        x="20.7998"
        y="17.1415"
        width="3.73333"
        height="3.73333"
        transform="rotate(90 20.7998 17.1415)"
        fill="#00FFA0"
      />
      <rect
        x="17.0664"
        y="20.8748"
        width="3.73333"
        height="3.73333"
        transform="rotate(90 17.0664 20.8748)"
        fill="#00FFA0"
      />
      <rect
        x="28.2666"
        y="9.6748"
        width="3.73333"
        height="3.73333"
        transform="rotate(90 28.2666 9.6748)"
        fill="#00FFA0"
      />
    </svg>`;
  }

  render() {
    return html` ${this.bsxTemplate()} ${this.hdxTemplate()} `;
  }
}
