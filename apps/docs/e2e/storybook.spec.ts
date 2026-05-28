import { test, expect } from '@playwright/test';

test('Storybook loads', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#storybook-panel-root')).toBeVisible({ timeout: 30000 });
});
