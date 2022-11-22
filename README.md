# UIGC Web Components

[![npm version](https://img.shields.io/npm/v/@galacticcouncil/ui.svg)](https://www.npmjs.com/package/@galacticcouncil/ui)

## What are [UIGC Web Components](https://magenta-chimera-ffcef1.netlify.app)?

- Collection of **reusable UI elements** crafted to ease Basilisk & HydraDX chains integration driven by a **lit framework** (~700kb bundle part).
- Usable with any current or future **web development framework**.
- Created and maintained by [Galactic Council](https://galacticcouncil.io/).

## Why web components?

- **Future-proof**: _web standards_, compatible with any web development framework.
- **Encapsulated**: Stable in any environment and suitable not only for apps, but also for _libraries and micro-frontends_.
- **Elegant**: _custom HTML elements_, hide implementation complexity behind a single HTML tag, easy to use with the standard DOM APIs.

## Docs & Demo

- [Playground and API Reference](https://magenta-chimera-ffcef1.netlify.app)

## How to Use

1. Install the NPM module

   ```sh
   npm install @galacticcouncil/ui
   ```

2. Import the component ui to your app:

   ```js
   import '@galacticcouncil/ui';
   ```

3. Use the UIGC Web Component

   ```html
   <uigc-alert variant="success"></uigc-alert>
   ```

### Customization

For framework customization please see following sections:

- [Font](https://github.com/galacticcouncil/ui/blob/master/doc/font.md)
- [Webkit](https://github.com/galacticcouncil/ui/blob/master/doc/webkit.md)

## Browser Support

UIGC Web Components are supported by all major modern browsers.

| Browser | Supported versions |
| ------- | ------------------ |
| Chrome  | Latest             |
| Firefox | Latest             |
| Safari  | Latest             |
| Edge    | Latest             |

## Local Development and Build

### Requirements

- [Node.js](https://nodejs.org/) (**version 18 or higher**)

### Structure

Project contains following sections:

| Section | Description                          |
| ------- | ------------------------------------ |
| base    | The UIGC base components             |
| icons   | The UIGC icons                       |
| logo    | The UIGC assets                      |
| styles  | The UIGC theme, font & webkit styles |
| utils   | The UIGC utils                       |

### Run local DEV

```sh
npm install # to install all dependencies
npm run dev # to build & serve the project
```

### PROD build

```sh
npm run cleanup # to cleanup the namespace
npm run package:prod # to build library & web bundle
```

## Issue reporting

Please create well-written issue [here](https://https://github.com/galacticcouncil/ui/issues/new). It makes it easier to find & fix the problem accordingly.
