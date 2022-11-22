import { html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { BaseLogo } from './BaseLogo';

@customElement('uigc-logo-tnkr')
export class TinkernetLogo extends BaseLogo {
  render() {
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="31.002"
        height="29.657"
        viewBox="0 0 31.002 29.657"
      >
        <script xmlns="" />
        <script xmlns="" />
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="0.746"
            y1="0.652"
            x2="0.187"
            y2="0.268"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stop-color="#30bcd0" />
            <stop offset="1" stop-color="#ca28cc" />
          </linearGradient>
        </defs>
        <g transform="translate(-400.401 -44.171)">
          <g transform="translate(-37)">
            <path
              d="M239.112,330.712l2.75-.351,1.559,2.794-1.745,1.973a13.1,13.1,0,0,1,.5,1.861l2.535.916-.048,3.2-2.5.837a13.271,13.271,0,0,1-.5,1.857l1.74,2.064-1.641,2.748-2.58-.525a13.08,13.08,0,0,1-1.366,1.359l.474,2.654-2.795,1.559-1.319-1.167v-5.055a9.412,9.412,0,0,0,2.237-14.048l2.7-2.675Zm-17.2,2.781a9.412,9.412,0,0,0,2.325,13.942v4.974l-1.453,1.224-2.748-1.641.524-2.579a13.072,13.072,0,0,1-1.359-1.365l-2.655.474-1.559-2.795,1.745-1.973a13.086,13.086,0,0,1-.5-1.862l-2.535-.916.047-3.2,2.5-.837a13.238,13.238,0,0,1,.5-1.857l-1.739-2.064,1.64-2.748,2.562.521Z"
              transform="translate(223.697 -279.828)"
              fill-rule="evenodd"
              fill="url(#linear-gradient)"
            />
            <path
              d="M252.225,294.031l2.795-1.559,1.972,1.745a13.071,13.071,0,0,1,1.862-.5l.916-2.535,3.2.047.836,2.5a13.3,13.3,0,0,1,1.857.5l2.063-1.739,2.747,1.641-.524,2.579q.284.245.554.509l-2.678,2.678a9.462,9.462,0,0,0-1.474-1.158l-1.561-.994v9.391l-1.742,1.006-1.742,1.006-1.742-1.006-1.742-1.006v-9.391l-1.561.994A9.466,9.466,0,0,0,254.689,300l-2.677-2.677q.33-.327.687-.634Z"
              transform="translate(191.645 -247.015)"
              fill="#fff"
              fill-rule="evenodd"
            />
          </g>
        </g>
      </svg>
    `;
  }
}