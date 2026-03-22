import { expect, test } from '@playwright/test';

 //1. Navigate to https://leafground.com/waits.xhtml 
test('Auto Wait Assignment', async ({ page }) => {
    await page.goto('https://leafground.com/waits.xhtml');

 //2. Wait for an element to become visible before interacting with it. 
    await page.locator("//h5[text()='Wait for Visibility (1 - 10 Sec)']/following-sibling::div//span[text()='Click']").click();
    await expect(page.locator("//*[text()='I am here']")).toBeVisible({ timeout: 10000 });

//3. Wait for an element to disappear from the page. 
    await page.locator("//h5[text()='Wait for Invisibility (1 - 10 Sec)']/following-sibling::div//span[text()='Click']").click();
    await expect(page.locator("//*[text()='I am about to hide']")).toBeHidden({ timeout: 10000 });

//4. Wait for an element to become clickable. 
    await page.locator("//h5[text()='Wait for Text Change (1 - 10 Sec)']/following-sibling::div//span[text()='Click']").click();
    await expect(page.locator("//*[text()='Did you notice?']")).toBeVisible({ timeout: 10000 });
});