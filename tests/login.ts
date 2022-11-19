import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test.only('Login page opens', async ({ page }) => {
  await page.locator('[data-testid=LoginIcon]').click()
  await expect(page).toHaveTitle(/sign-in/)
})
