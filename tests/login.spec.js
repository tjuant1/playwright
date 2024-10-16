import {test, expect} from '@playwright/test'

test('Login Test', async ({page})=>{

    const email = 'user_pw@email.com';
    const password = '5514@Test';
    const url = 'https://front.serverest.dev/login';

    await page.goto(url);
    await page.setViewportSize({ width: 1920, height: 1080 });

    await page.fill("#email", email);
    await page.fill("#password", password);
    await page.click("button[type='submit']");

    const logout_button = page.locator("//button[@data-testid='logout'][contains(.,'Logout')]");
    await logout_button.waitFor({state: 'visible'});

    await page.close();

})