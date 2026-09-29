import {test, expect} from 'playwright/test';

test ('focusAction', async ({page}) => {
    await page.goto("https://www.saucedemo.com");
    await page.getByPlaceholder('username').fill('Pranita');
    await page.getByPlaceholder('password').fill('Pranita@123');
    await page.locator('#login-button').click();

    






}) 