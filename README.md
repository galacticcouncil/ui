# UIGC Web Components

**Moved under [Apps](https://github.com/galacticcouncil/apps) monorepo.**

[![npm version](https://img.shields.io/npm/v/@galacticcouncil/ui.svg)](https://www.npmjs.com/package/@galacticcouncil/ui)

## What are [UIGC Web Components](https://galactic-uikit.netlify.app)?

- Collection of **reusable UI elements** crafted to ease Basilisk & HydraDX chains integration driven by a **lit framework** (~400kb unpacked size).
- Usable with any current or future **web development framework**.
- Created and maintained by [Galactic Council](https://galacticcouncil.io/).

## Why web components?

- **Future-proof**: _web standards_, compatible with any web development framework.
- **Encapsulated**: Stable in any environment and suitable not only for apps, but also for _libraries and micro-frontends_.
- **Elegant**: _custom HTML elements_, hide implementation complexity behind a single HTML tag, easy to use with the standard DOM APIs.

## Docs & Demo

- [Playground and API Reference](https://galactic-uikit.netlify.app)

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
- [Base](https://github.com/galacticcouncil/ui/blob/master/doc/base.md)

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

| Section | Description                 |
| ------- | --------------------------- |
| base    | Base components             |
| icons   | Icons                       |
| logo    | Assets                      |
| styles  | Theme, font & webkit styles |
| utils   | Utils                       |

### Local development

For details see `esbuild.dev.mjs`

```sh
npm install # to install all dependencies
npm run dev # to build & serve the apps
```

### Production build

For details see `esbuild.prod.mjs`

```sh
npm install # to install all dependencies
npm run pckg:release # to release patch version (default)
npm run pckg:publish # to publish npm package
```

#### Other

To release minor or major version of the ui kit package use following commands.

```sh
npm run pckg:release -- --release-as minor # Release minor version. E.g. 1.0.23 -> 1.1.0
npm run pckg:release -- --release-as major # Release major version. E.g. 1.0.23 -> 2.0.0
```

## Issue reporting

Please create well-written issue [here](https://https://github.com/galacticcouncil/ui/issues/new). It makes it easier to find & fix the problem accordingly.
