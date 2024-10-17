import { test, expect } from '@playwright/test';

test('Login Test HRM', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.setViewportSize({ width: 1920, height: 1080 });

  await page.getByPlaceholder('Username').fill('admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  const username = page.getByText('anugubari priya');

  await expect(username).toBeVisible();
  expect(page.getByText('Dashboard'));

  await page.locator('span').filter({ hasText: 'anugubari priya' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();

  page.close();

});