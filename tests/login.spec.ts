import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('Login page opens', async ({ page }) => {
  await page.locator('[data-testid=LoginIcon]').click()
  await expect(page).toHaveURL(/.*sign-in/)
})
