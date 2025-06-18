import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://demoqa.com',
    ignoreHTTPSErrors: true,
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
    },
  },
  testDir: 'src/api-tests', 
  reporter: [['html']],
});
