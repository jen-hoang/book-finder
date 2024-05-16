# Book Finder

Book Finder is a Web App made by Vue 3 that search for books via Google Book API.

## Table of Contents

- [Features](#features)
- [Development process](#development-process)
- [Project setup](#project-setup)

## Features

- Search books by keyword
- Get more result by keep scrolling (infinite scrolling)
- Expand more detail on the side of the search page

## Development process

## Project Setup

### Prerequisite

In order to install proper Node version automatically, I recommend using [Nodenv](https://github.com/nodenv/nodenv).
If you want to use `nvm`, please check Node version in `.node-version` file.

### Installation

```sh
npm install
```

### Set up Pre-commit hook (optional)

Only needed if you want to make a change on the code and want to run code linting before commit

```sh
npm run prepare
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

The project will be serve at <http://localhost:4000/>

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
