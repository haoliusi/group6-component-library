# group6-component-library

A small, installable React Native component library whose documentation runs in
the browser with Storybook and `react-native-web`.

The important idea: Storybook documents the same components an Expo app imports.
There is no copy-and-paste step between the design-system site and the product.

## What is included

- `AppHeader`, `ListItem`, and `TextField` components
- exported color, spacing, and radius tokens
- JavaScript source plus generated editor declarations, ESM, and CommonJS builds
- Storybook controls, actions, decorators, backgrounds, viewports, accessibility,
  autodocs, MDX, and interactive behavior examples
- a GitHub Pages deployment workflow

## Run locally

Requires Node 22.13 or newer.

```sh
npm install
npm run storybook
```

Useful project checks:

```sh
npm run verify
npm run build-storybook
npm pack --dry-run
```

## Install from GitHub

```sh
npm install github:haoliusi/group6-component-library#v2.0.0
```

```tsx
import { AppHeader, ListItem, TextField } from 'group6-component-library';
```

The package is marked `private` to prevent accidental npm registry publication.
That setting does not prevent installation from Git. See
[docs/GIT-INSTALLATION.md](docs/GIT-INSTALLATION.md).

## Short guides

- [Student setup walkthrough](docs/STUDENT-SETUP.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Create your own](docs/CREATE-YOUR-OWN.md)
- [Git installation](docs/GIT-INSTALLATION.md)
- [Troubleshooting](docs/TROUBLESHOOTING.md)
