import { test, expect } from '@playwright/test';

test.describe('Mission Control — smoke', () => {
  test('header renders, sidebar toggles, tabs switch', async ({ page }) => {
    await page.goto('/');

    // Header / brand
    await expect(page.getByText(/Mission Control/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /New Project/i })).toBeVisible();

    // Sidebar collapse
    const collapseBtn = page.getByRole('button', { name: /Collapse agent panel/i });
    await expect(collapseBtn).toBeVisible();
    await collapseBtn.click();
    await expect(page.getByRole('button', { name: /Expand agent panel/i })).toBeVisible();

    // Tab switch
    await page.getByRole('tab', { name: /Active Projects/i }).click();
    await page.getByRole('tab', { name: /Service Pipeline/i }).click();
    await page.getByRole('tab', { name: /Live Feed/i }).click();
  });
});
