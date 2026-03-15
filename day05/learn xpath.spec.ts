import { test} from '@playwright/test';

test.only('Salesforce Login Test', async ({ page }) => {
  await page.goto('https://login.salesforce.com/');
  await page.locator('//input[@id="username"]').fill('dilipkumar.rajendran@testleaf.com');
  await page.locator('//input[@type="password"]').fill('TestLeaf@2025');
  await page.locator('#Login').click();
});