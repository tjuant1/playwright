import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.setViewportSize({ width: 1920, height: 1080 });

  await page.getByPlaceholder('Username').fill('admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByText('(1) Candidate to Interview').click();
  await page.getByRole('button', { name: ' Add' }).click();

  await page.getByPlaceholder('First Name').fill('candidate');
  await page.getByPlaceholder('Middle Name').fill('one');
  await page.getByPlaceholder('Last Name').fill('two');
  await page.getByPlaceholder('Type here').first().fill('candidateone@two.com');
  await page.locator('form i').first().click();
  await page.getByRole('option', { name: 'Senior QA Lead' }).click();
  await page.locator('form i').nth(2).click();
  await page.getByText('16').click();
  await page.locator('textarea').fill('A really good candidate');
  await page.getByRole('button', { name: 'Save' }).click();

  const candidate = page.locator('div').filter({ hasText: 'Application StageNamecandidate one twoVacancySenior QA LeadHiring ManagerN/' }).nth(4);
  await expect(candidate).toBeVisible( { timeout: 10000 })

  page.close();
  
});