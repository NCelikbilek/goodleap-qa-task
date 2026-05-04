import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const uiTestDir = defineBddConfig({
  features: 'UI_Tests/features/**/*.feature',
  steps: 'UI_Tests/steps/**/*.ts',
  outputDir: '.features-gen/UI_Tests',
});

const apiTestDir = defineBddConfig({
  features: 'API_Tests/features/**/*.feature',
  steps: 'API_Tests/steps/**/*.ts',
  outputDir: '.features-gen/API_Tests',
});

export default defineConfig({
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    headless: false,
    trace: 'on',
    launchOptions: { slowMo: 500 },
  },
  projects: [
    {
      name: 'UI - Chromium',
      testDir: uiTestDir,
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'UI - Firefox',
      testDir: uiTestDir,
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'UI - Webkit',
      testDir: uiTestDir,
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'API - Pet',
      testDir: apiTestDir,
      use: {
        extraHTTPHeaders: {
          'Content-Type': 'application/json',
        },
      },
    },
  ],
});
