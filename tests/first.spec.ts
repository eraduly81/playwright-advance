import { test, expect } from '@playwright/test';

let browserName: string; // Store the browser name

test.describe('Google Search', () => {
  test.beforeAll(async () => {

  });

  test.afterAll(async () => { });

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.google.com');
  });

  test('Google page should load', async ({ page }) => {
    await expect(page).toHaveTitle(/Google/);
  });

  test('Reload page', async ({ page }) => {
    await page.reload();
    // Add assertions to verify the page reloaded successfully
    await expect(page).toHaveTitle(/Google/); // Example assertion
  });
});
