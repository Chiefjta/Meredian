import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  retries: 0,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
  webServer: [
    {
      command: 'npm --workspace server run dev',
      port: 4000,
      reuseExistingServer: !process.env.CI,
      cwd: '..',
    },
    {
      command: 'npm --workspace client run dev',
      port: 5173,
      reuseExistingServer: !process.env.CI,
      cwd: '..',
    },
  ],
});
