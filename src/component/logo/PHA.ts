import { html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { BaseLogo } from './BaseLogo';

@customElement('uigc-logo-pha')
export class PhalaLogo extends BaseLogo {
  render() {
    return html`
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_9060_132003)">
          <path
            d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
            fill="black"
          />
          <path d="M22.4955 16.6304H11.5195V20.2892H22.4955V16.6304Z" fill="#D1FF52" />
          <path d="M26.155 11.1424H22.4961V16.631H26.155V11.1424Z" fill="#D1FF52" />
          <path d="M11.5189 20.2899H7.85938V21.2045V22.1197V25.7779H11.5183V22.1197H11.5189V20.2899Z" fill="#D1FF52" />
          <path
            d="M22.4955 7.48352H11.5189H10.9928H7.85938V14.8013V15.9693V16.631H11.5189V15.9693V14.8013V11.1424H22.4955V7.48352Z"
            fill="#D1FF52"
          />
          <path d="M22.4955 16.6304H11.5195V20.2892H22.4955V16.6304Z" fill="#D1FF52" />
        </g>
        <defs>
          <clipPath id="clip0_9060_132003">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    `;
  }
}