import test, { expect } from "@playwright/test";
// 1. Navigate to URL
test("Learn Assertions", async ({ page }) => {
  await page.goto('https://leafground.com/checkbox.xhtml'); 
// 2. Click on the "Basic Checkbox.” 
  await page.locator('span').filter({ hasText: 'Basic' }).click();
// 3. Click on the "Notification Checkbox." 
  await page.locator('span').filter({ hasText: 'Ajax' }).click();
// 4. Verify that the expected message is displayed.
  await expect(page.locator(`//*[contains(text(),'Checked')]`)).toBeVisible();
// 5. Click on your favorite language (assuming it's related to checkboxes). 
 await page.locator("//label[text()='Others']").click();
// 6. Click on the "Tri-State Checkbox."
  await page.locator('#j_idt87\\:ajaxTriState .ui-chkbox-box').click();
  // 7. Verify which tri-state option has been chosen.
  await expect(page.locator(`//*[contains(text(),'State has been changed')]`)).toBeVisible();
  // 8. Click on the "Toggle Switch.
 await page.locator(`//*[contains(@class,"toggleswitch-slider")]`).click();
  // 9. Verify that the expected message is displayed.
  await expect(page.locator(`//*[contains(text(),'Checked')]`)).toBeVisible();
  // 10. Verify if the Checkbox is disabled. 
  const disabledTextBox = page.locator('//input[@id="j_idt87:j_idt102_input"]');
  await expect(disabledTextBox).toBeDisabled();
  console.log("Disabled textbox check passed");
  // 11. Select multiple options on the page (details may be needed).
  await page.locator(`//*[@data-label='Cities']`).click();
 await page.locator(`//*[@data-item-value='Rome']/label[text()="Rome"]`).click();
 await page.locator(`//*[@data-item-value='Paris']/label[text()="Paris"]`).click();
await page.waitForTimeout(3000);

});







 

 
 

 
// 12. Perform any additional actions or verifications required. 
// 13. Close the web browser when done.