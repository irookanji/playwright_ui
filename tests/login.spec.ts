import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('Login page opens', async ({ page }) => {
  await page.locator('[data-testid=LoginIcon]').click()
  await expect(page).toHaveURL(/.*sign-in/)
})

test('User can not login with invalid username or password', async ({ page }) => {
  await page.locator('[data-testid=LoginIcon]').click()
  await page.locator('id=username').fill('Qwerty')
  await page.locator('id=password').fill('test123')
  await page.locator('role=button[name="Sign In"]').click()
  await expect(page.locator('//a[@href="/sign-up"]')).toBeVisible()
})

test('Username is required to be login', async ({ page }) => {
  await page.locator('[data-testid=LoginIcon]').click()
  await page.locator('id=password').fill('test123')
  await page.locator('role=button[name="Sign In"]').click()
  await expect(page.locator('#username-helper-text')).toBeVisible()
})

test('User successfully signed', async ({ page }) => {
  await page.locator('#standard-basic').scrollIntoViewIfNeeded()
  await page.locator('#standard-basic').fill('test123@gmail.com')
  await page.locator('//button[normalize-space()="SIGN IN"]').click()
  await expect(page.locator('//div[@class="sc-dPiLbb hjCPeB MuiBox-root css-0"]')).toContainText(
    'You were successfully signed!',
  )
})
