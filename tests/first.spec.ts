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
});




