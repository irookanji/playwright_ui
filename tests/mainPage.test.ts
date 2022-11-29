import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('New arrivals opens and links visible', async ({ page }) => {
  await page.locator('//button[normalize-space()="New Arrivals"]').click()
  await expect(page.locator('//p[normalize-space()="Shop kits for him"]')).toBeVisible()
})

test('Cart opens', async ({ page }) => {
  await page.locator('(//*[name()="path"])[3]').click()
  await expect(
    page.locator(
      '(//p[@class="MuiTypography-root MuiTypography-body1 sc-hBUSln Bksqu css-1lshgx"])[1]',
    ),
  ).toHaveText('Your Cart is Empty')
})

test('Shop The Collections is visible', async ({ page }) => {
  await expect(page.locator('//p[normalize-space()="Shop The Collections"]')).toBeVisible()
})

test.fixme('See how button', async ({ page }) => {
  const seeHowBtn = page.locator('//button[normalize-space()="See How"]')
  // await seeHowBtn.click()
  await expect(seeHowBtn).toHaveAttribute('href', '/see-how')
})

test('Sign in works correctly', async ({ page }) => {
  await page.locator('//input[@id="standard-basic"]').fill('test@test.com')
  await page.locator('//button[normalize-space()="SIGN IN"]').click()
  await expect(page.locator('//p[contains(text(),"You were successfully signed!")]')).toBeVisible()
})
