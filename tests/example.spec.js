import { test, expect } from '@playwright/test';

test('Valid Login @smoke', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle(/Example/);
  });

 test('Invalid Login @regression', async ({ page }) => {
    await page.goto('https://example.com');
  });



test.describe('Dashboard Feature', () => {  test('Open Dashboard', async ({ page }) => {
    await page.goto('https://example.com');
  });

});