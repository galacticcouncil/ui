import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { UIGCElement } from './base/UIGCElement';

@customElement('uigc-toggle-button-group')
export class ToggleButtonGroup extends UIGCElement {
  @property({ type: String }) selected = null;

  static styles = [
    UIGCElement.styles,
    css`
      :host(:not([variant])) .toggle-group-root {
        gap: 8px;
        padding: 8px 10px;
      }

      :host([variant='dense']) .toggle-group-root {
        gap: 4px;
        padding: 4px 5px;
      }

      .toggle-group-root {
        background: var(--uigc-toggle-button-group--root-background);
        border-radius: var(--uigc-toggle-button-group--root-border-radius);
        display: flex;
      }
    `,
  ];

  override async updated() {
    const slot = this.shadowRoot.querySelector('slot');
    console.log(slot);
    const slt = slot.assignedElements();
    console.log(slt);
    slt.forEach((item) => {
      console.log(item);
      const value = item.getAttribute('value');
      console.log(value);
      console.log(value == this.selected);
      if (value == this.selected) {
        item.setAttribute('aria-pressed', 'true');
      } else {
        item.setAttribute('aria-pressed', 'false');
      }
    });
  }

  render() {
    return html`
      <div class="toggle-group-root">
        <slot></slot>
      </div>
    `;
  }
}
