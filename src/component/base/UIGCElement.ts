import { LitElement, CSSResultGroup } from 'lit';

import { baseStyles } from '../styles/base.css';
import { webkitStyles } from '../styles/webkit.css';
import { fontStyles, fontFace } from '../styles/font.css';
import { paletteProperties, bsxThemeProperties, hdxThemeProperties } from '../styles/theme.css';

import { createAdaptedStyle, createStyle, hasAdaptedStyle, hasStyle } from '../utils/styles';

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
    if (!hasAdaptedStyle('uigc-palette', '')) {
      createAdaptedStyle(paletteProperties, 'uigc-palette', '');
    }
  }

  createBsxThemeStylesheet() {
    if (!hasAdaptedStyle('uigc-bsx-theme', '')) {
      createAdaptedStyle(bsxThemeProperties, 'uigc-bsx-theme', '');
    }
  }

  createHdxThemeStylesheet() {
    if (!hasAdaptedStyle('uigc-hdx-theme', '')) {
      createAdaptedStyle(hdxThemeProperties, 'uigc-hdx-theme', '');
    }
  }

  override async firstUpdated() {
    this.createPaletteStylesheet();
    this.createBsxThemeStylesheet();
    this.createHdxThemeStylesheet();
    this.createFontFaceStylesheet();
    this.createWebkitStylesheet();
  }
}
