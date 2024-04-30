import { chromium } from "playwright/test";

describe('Launch Browser', () => {

    test('Open Letcode', async () => {

        const browser = await chromium.launch({
            headless: false
        });
        const context = await browser.newContext();
        const page  = await context.newPage();
        await page.goto("https://letcode.in/");
        await page.fill("input[name='email']","Dinesh");
        await page.fill("input[name='password']","krishnan");
        await page.click("button:text('LOGIN')");
        await page.click("Sign out");
        await browser.close();
        
    });
 
});