import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 50000,
  retries: 0,
  testDir: './tests',
  use: {
    baseURL: 'https://demoqa.com',
    headless: false,
    viewport: { width: 1920, height: 1080 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'Chrome-1366x768',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1366, height: 768 }
      }
    }
  ],
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
});
