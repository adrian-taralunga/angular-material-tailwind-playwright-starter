import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:4200/');

  // Expect a title "to contain" a substring.
  expect(await page.title()).toContain('Angular Material');
});

test('get started link', async ({ page }) => {
  await page.goto('http://localhost:4200/');

  await expect(page.getByText('Hello, angular material starter tailwind jest ngxs playwright')).toBeVisible();
});
