import { test, expect } from '@playwright/test'

test.describe('Launch Browser', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('Opens See How page', async ({ page }) => {
    await expect(page).toHaveTitle(/Allbirds App/)
    await expect(page.locator('//button[text()="See How"]')).toHaveText('See How')

    await page.click('button:has-text("See How")')
    await expect(page.locator('//img[@alt="Page not found"]')).toBeVisible()
    // await page.waitForTimeout(5000)
  })

  test('Shop The Collections is visible', async ({ page }) => {
    await expect(page.locator('//p[text()="Shop The Collections"]')).toBeVisible()
  })

  test('About page can be opened', async ({ page }) => {
    await page.locator('//a[@aria-label="ABOUT"]//*[name()="svg"]').click()
    await expect(page.locator('//button[normalize-space()="Get In Touch"]')).toBeVisible()
  })

  test('Experemental test', async ({ page }) => {
    const yourInput = page.locator('modal-selector')

    if (await yourInput.isVisible()) {
      await yourInput.fill('1234')
    } else {
      await page.locator('//a[@aria-label="ABOUT"]//*[name()="svg"]').click()
      await expect(page.locator('//button[normalize-space()="Get In Touch"]')).toBeVisible()
    }
  })
})
