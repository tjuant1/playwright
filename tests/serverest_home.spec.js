const {test, expect} = require('@playwright/test')

test('Home Page', async ({page})=>{

    await page.goto('https://front.serverest.dev/login');
    await page.setViewportSize({ width: 1920, height: 1080 });

    const pageURL = page.url();
    const pageTitle = await page.title();

    await expect(page).toHaveTitle(pageTitle);
    await expect(page).toHaveURL(pageURL);

    await page.close();

})