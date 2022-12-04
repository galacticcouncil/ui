import { LitElement, CSSResultGroup } from 'lit';

import { baseStyles } from '../styles/base.css';
import { webkitStyles } from '../styles/webkit.css';
import { fontStyles, fontFace } from '../styles/font.css';
import { paletteProperties, bsxThemeProperties, hdxThemeProperties } from '../styles/theme.css';

import { createStyle, hasStyle } from '../utils/styles';

export class UIGCElement extends LitElement {
  static styles = [baseStyles, fontStyles] as CSSResultGroup;

  createFontFaceStylesheet() {
    if (!hasStyle('uigc-font-face', '')) {
      createStyle(fontFace, 'uigc-font-face', '');
    }
  }

  createWebkitStylesheet() {
    if (!hasStyle('uigc-webkit', '')) {
      createStyle(webkitStyles, 'uigc-webkit', '');
    }
  }

  createPaletteStylesheet() {
    if (!hasStyle('uigc-palette', '')) {
      createStyle(paletteProperties, 'uigc-palette', '');
    }
  }

  createBsxThemeStylesheet() {
    if (!hasStyle('uigc-bsx-theme', '')) {
      createStyle(bsxThemeProperties, 'uigc-bsx-theme', '');
    }
  }

  createHdxThemeStylesheet() {
    if (!hasStyle('uigc-hdx-theme', '')) {
      createStyle(hdxThemeProperties, 'uigc-hdx-theme', '');
    }
  }

  override async firstUpdated() {
    this.createPaletteStylesheet();
    this.createFontFaceStylesheet();
    this.createBsxThemeStylesheet();
    this.createHdxThemeStylesheet();
    this.createWebkitStylesheet();
  }
}
