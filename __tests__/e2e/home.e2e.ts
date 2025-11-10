import { expect, test } from '@playwright/test'

// Basic smoke test for Next.js home page
// Run with: pnpm e2e (Playwright config still points to testDir 'e2e' so we may adjust later)
test('home page renders', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Next/)
  await expect(page.getByRole('main')).toBeVisible()
})
