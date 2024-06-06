/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  overrides: [
    {
      files: ['e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'],
      extends: ['plugin:playwright/recommended'],
    },
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/*.test.{j,t}s?(x)'],
      extends: ['plugin:vitest-globals/recommended'],
      env: {
        'vitest-globals/env': true,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
};
