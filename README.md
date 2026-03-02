# React Vite Custom Template

Frontend boilerplate with pre-configured development environment. Includes ESLint and Stylelint setup, structured styles with mixins and variables, light/dark theme system, cookie handling, PWA manifest with icons, development server configuration, and removable template components for rapid project initialization.

[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square&logo=opensource)](LICENSE)

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)
- [Customizations](#customizations)
- [Template Cleanup Guide](#template-cleanup-guide)
- [Sponsorship](#sponsorship)
- [License](#license)

## Features

- **Development Server**: Includes development server with Hot Module Replacement (`vite.config.js`).
- **Code Quality Linters**: Includes pre-configured linters for JavaScript/React (`eslint.config.js`) and CSS/Sass (`.stylelintrc.json`).
- **Sass Integration**: Provides structured file system for Sass preprocessor in `src/styles`.
- **Theme Switching System**: Light/dark mode system that detects OS preference and persists user choice (`src/utils/theme.js`).
- **PWA-Ready Setup**: Contains necessary manifest file and icon set for Progressive Web App installation (`public/manifest.webmanifest`).

## Project Structure

```
.
├── .dockerignore             # Specifies files to ignore for Docker builds.
├── .gitignore                # Lists files and directories intentionally untracked by Git.
├── .stylelintrc.json         # Configuration file for Stylelint (CSS/Sass linter).
├── README.md                 # Project documentation.
├── eslint.config.js          # Configuration file for ESLint (JavaScript/React linter).
├── index.html                # Root HTML file where React application is mounted.
├── package.json              # Defines project metadata, npm scripts, and dependency lists.
├── package-lock.json         # Ensures deterministic builds by locking dependency versions.
├── public/                   # Directory for static assets
├── src/                      # Directory for application source code.
│   ├── App.css               # Styles defining layout for App component.
│   ├── App.jsx               # Root React component, acting as container for page structure.
│   ├── assets/               # Directory for static assets processed by build tool.
│   ├── components/           # Directory for all React components.
│   │   └── template-components/ # Directory with placeholder components for removal.
│   │       ├── Aside.jsx     # Template 'Aside' component.
│   │       ├── CookieDialog.jsx # Template 'CookieDialog' component.
│   │       ├── Footer.jsx    # Template 'Footer' component.
│   │       ├── Header.jsx    # Template 'Header' component.
│   │       ├── Main.jsx      # Template 'Main' content component.
│   │       └── TemplateStyles.scss # Stylesheet for all template components.
│   ├── favicons-src/         # Source directory for favicon generation.
│   │   └── favicon.svg       # Source SVG file used to generate favicons.
│   ├── main.jsx              # Application entry point where React app is mounted to DOM.
│   ├── styles/               # Directory for global styles and Sass configuration.
│   │   ├── _breakpoints.scss # Sass file defining media query breakpoints.
│   │   ├── _custom.scss      # Empty file for adding custom user styles.
│   │   ├── _fonts.scss       # File for defining @font-face rules.
│   │   ├── core/             # Directory for core Sass files.
│   │   │   ├── _mixins.scss  # Contains reusable Sass mixins.
│   │   │   ├── _variables.scss # Contains Sass variable definitions (colors, fonts, etc.).
│   │   │   └── index.scss    # Imports all files from 'core' directory.
│   │   ├── index.scss        # Main Sass file that imports all other style files.
│   │   └── reset.css         # CSS reset file to normalize browser-default styles.
│   └── utils/                # Directory for utility functions.
│       ├── cookies.js        # Contains logic for cookie consent dialog.
│       └── theme.js          # Contains logic for theme management system.
└── vite.config.js            # Configures Vite development server, build process, and plugins.
```

## Getting Started

To get the project running locally, execute the following commands in your terminal:

```bash
git clone https://github.com/theEvilGrinch/react-vite-custom-boilerplate.git
cd react-vite-custom-boilerplate
npm install
npm run dev
```

## Available Scripts

-   `npm run dev`: Starts development server.
-   `npm run build`: Bundles application for production into `dist` directory.
-   `npm run lint`: Analyzes codebase for potential errors and style issues.
-   `npm run preview`: Serves production build locally for review.

## Dependencies

### Production
-   `react`: JavaScript library for building user interfaces.
-   `react-dom`: Provides DOM-specific methods for React.

### Development
-   `@eslint/js`, `eslint`, `globals`: Core packages for ESLint, static code analysis tool.
-   `@types/react`, `@types/react-dom`: TypeScript type definitions for React and React DOM.
-   `@vitejs/plugin-react-swc`: Vite plugin that enables React support via SWC compiler.
-   `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`: ESLint plugins for enforcing React Hooks rules and enabling Fast Refresh.
-   `sass`: Sass CSS preprocessor.
-   `stylelint`, `@stylistic/stylelint-plugin`, `postcss-scss`: Packages for Stylelint, linter for CSS/Sass.
-   `vite`: Build tool and development server.

## Customizations

-   **Development Server**: Server configuration in `vite.config.js` specifies port (`5173`), host (`127.0.0.1`), and automatically opens browser tab on startup.

-   **Code Quality Linters**: Project includes configurations for two linters. ESLint (`eslint.config.js`) analyzes JavaScript and React code. Stylelint (`.stylelintrc.json`), along with its stylistic plugin, manages CSS and Sass code style.

-   **Sass Preprocessor**: Structured Sass setup is included in `src/styles`. `_mixins.scss` provides reusable functions including `flex-text` for responsive typography, `media-range`, `max-width`, and `min-width` for media query management. `_variables.scss` holds project-wide variables, and `index.scss` files act as aggregators for all partials.

-   **Theme Management**: Logic in `src/utils/theme.js` sets initial theme based on user's OS preference (`prefers-color-scheme`). Separate function is available to toggle theme and persist choice in `localStorage`.

-   **Cookie Consent**: Script in `src/utils/cookies.js` displays dialog if cookie named `cookieConsent` with value `accepted` is not found. Upon acceptance, it sets this cookie with `Max-Age` of 31,536,000 seconds (1 year).

-   **PWA Configuration**: `public` directory contains `manifest.webmanifest` and complete set of icons to make application installable. For details on generating these icons, see [Favicon Generation](#favicon-generation) section.

-   **Favicon Generation**: `src/favicons-src/` directory is prepared for use with [favicon-generator-cli](https://github.com/theEvilGrinch/favicon-generator-cli). Place source images in this directory and use generator to create optimized favicon sets for `public/` directory. Visit [favicon-generator-cli repository](https://github.com/theEvilGrinch/favicon-generator-cli) for detailed instructions and usage examples.

## Template Cleanup Guide

Before starting development, the following items should be addressed in order:

1.  **Update Project Metadata**: Modify `name`, `version`, and other fields in `package.json`.
2.  **Remove Template Components**: Delete `src/components/template-components` directory.
3.  **Remove Utility Scripts**: Delete `src/utils` directory.
4.  **Update Entry Point**: Remove style import for template components and `initTheme()` and `setCookies()` calls from `src/main.jsx`.
5.  **Clear Root Component**: Erase placeholder content within `App.jsx`.
6.  **Customize Styles**: Modify variables in `src/styles/core/_variables.scss` and add project-specific styles in `src/styles/_custom.scss`.
7.  **Update PWA Manifest**: Edit `public/manifest.webmanifest` to reflect your application's name, theme colors, and other details.
8.  **Replace Favicons**: Place your own source image in `src/favicons-src` and regenerate favicon set. See [Favicon Generation](#favicon-generation) section for instructions.

## Sponsorship

[![Boosty](https://img.shields.io/badge/Boosty-F15F2C?style=for-the-badge&logo=boosty&logoColor=white)![Support](https://img.shields.io/badge/Support%20me-grey?style=for-the-badge)](https://boosty.to/andmitr/donate) 

![Bitcoin](https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white&logoSize=auto) 
```
1CCnwAvJYEoDVGM7vsBg2Q99cF9EHtBVaY
```
![Tether](https://img.shields.io/badge/Tether%20(USDT%20ETH)-168363?style=flat&logo=tether&logoColor=white&logoSize=auto) 
```
0x54f0ccc6b2987de454f69f2814fc9202bcfb74fe
```

## License

MIT Licensed. See [LICENSE](LICENSE) for details.
