import { chromium, test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://trail-running-app.netlify.app/')
  });

// test('Open Allbirds', async ({ page }) => {
//     const browser = await chromium.launch({
//         headless: false
//     })
//     // const context = await browser.newContext()
//     // const page = await context.newPage()
//     await page.goto('https://trail-running-app.netlify.app/')

//     await browser.close()
// })

test.describe('Launch Browser', () => {

    test('homepage has title and links to See How page', async ({ page }) => {
        await expect(page).toHaveTitle(/Allbirds App/);
        await expect(page.locator('//button[text()="See How"]')).toHaveText('See How')

        await page.locator('//button[text()="See How"]').click()
        await expect(page.locator('//*[@id="root"]/div/div/a/p')).toHaveText('Home')
    })

})