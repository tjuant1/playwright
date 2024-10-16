import {test, expect} from '@playwright/test'

test('Sign up', async ({page})=>{

    const name = 'user_pw';
    const email = 'user_pw@email.com';
    const password = '5514@Test';

    await page.goto('https://front.serverest.dev/login');
    await page.setViewportSize({ width: 1920, height: 1080 });

    await page.click("a[type='button']");

    await page.fill('#nome', name);
    await page.fill('#email', email);
    await page.fill('#password', password);
    await page.click("button[type='submit']");

    page.waitForSelector('.my-2.my-sm-0.btn.btn-info', { timeout: 10000 })
    const validate_login = page.locator(".my-2.my-sm-0.btn.btn-info");
    await expect(validate_login).toBeVisible()

    await page.close();

})