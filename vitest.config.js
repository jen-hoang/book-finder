import { fileURLToPath, URL } from 'node:url';
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      environmentMatchGlobs: [['**/*.component.test.js', 'jsdom']],
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@mocks': fileURLToPath(new URL('./__mocks__', import.meta.url)),
      },
    },
  }),
);
