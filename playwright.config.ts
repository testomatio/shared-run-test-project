import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['list'],
    ['@testomatio/reporter/lib/adapter/playwright.js', { apiKey: process.env.TESTOMATIO }]
  ],
  testDir: './tests',
});
