import { test, expect } from '@playwright/test'

test.describe('Home page', () => {
  test('displays the page title', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('body')).toBeVisible()
  })
})
