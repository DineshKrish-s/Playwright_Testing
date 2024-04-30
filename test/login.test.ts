import { chromium } from "playwright/test";

describe('Launch Browser', () => {

    test('Open Letcode', async () => {

        const browser = await chromium.launch({
            headless: false
        });
        const context = await browser.newContext();
        const page  = await context.newPage();
        await page.goto('https://letcode.in/');
        await page.click("text=Log in")
        
        await browser.close();
        
    });
 
});