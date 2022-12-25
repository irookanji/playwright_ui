import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test.describe('Launch Browser', () => {
  test('Homepage has title and links to See How page', async ({ page }) => {
    await expect(page).toHaveTitle(/Allbirds App/)
    await expect(page.locator('//button[text()="See How"]')).toHaveText('See How')

    await page.click('button:has-text("See How")')

    await expect(page.locator('//p[text()="Home"]')).toHaveText('Home')

    // await page.waitForTimeout(5000)

    await page.click('//p[text()="Home"]')

    await expect(page.locator('//div[text()="Our Favorites"]')).toContainText('Our Favorites')
  })

  test('Shop The Collections is visible', async ({ page }) => {
    await expect(page.locator('//p[text()="Shop The Collections"]')).toBeVisible()
  })

  test('About page can be opened', async ({ page }) => {
    await page.locator('//a[@aria-label="ABOUT"]//*[name()="svg"]').click()
    await expect(page.locator('//button[normalize-space()="Get In Touch"]')).toBeVisible()
  })
})
