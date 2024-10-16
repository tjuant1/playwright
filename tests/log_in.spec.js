import {test, expect} from '@playwright/test'

test('Sign up', async ({page})=>{

    await page.goto('https://demoblaze.com/');
    await page.setViewportSize({ width: 1920, height: 1080 });

    await page.click('#login2');

    await page.fill('#loginusername', 'user_pw');
    await page.fill('#loginpassword', '5514@Test');
    await page.click("button[onclick='logIn()']");

    const validate_login = page.locator('#nameofuser');
    await expect(validate_login).toBeVisible()

    await page.close();

})