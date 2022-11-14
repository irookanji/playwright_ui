import { chromium, test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://trail-running-app.netlify.app/')
  });

test.describe.only('Launch Browser', () => {

    test('Homepage has title and links to See How page', async ({ page }) => {
        await expect(page).toHaveTitle(/Allbirds App/);
        await expect(page.locator('//button[text()="See How"]')).toHaveText('See How')

        await page.click('button:has-text("See How")')

        await expect(page.locator('//p[text()="Home"]')).toHaveText('Home')

        // await page.waitForTimeout(5000)

        await page.click('//p[text()="Home"]')

        await expect(page.locator('//div[text()="Our Favorites"]')).toContainText('Our Favorites')
    })

})