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
  await expect(page.locator('.MuiAlert-message.css-1w0ym84')).toBeVisible()
})

test('Username is required to be login', async ({ page }) => {
  await page.locator('[data-testid=LoginIcon]').click()
  await page.locator('id=password').fill('test123')
  await page.locator('role=button[name="Sign In"]').click()
  await expect(page.locator('#username-helper-text')).toBeVisible()
})
