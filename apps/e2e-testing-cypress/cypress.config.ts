import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__dirname, {
      bundler: 'webpack',
    }),
    baseUrl: 'https://demo.realworld.io',
    experimentalRunAllSpecs: true,
    env: {
      prefix: 'schmilblick',
    },
  },
});
