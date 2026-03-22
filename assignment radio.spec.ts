import {test} from '@playwright/test';

test(`Assignment for Radio Buttons`, async ({page}) => {
    await page.goto(`https://leafground.com/radio.xhtml`);
    const defaultSelectedRadioButton = await page.locator(`//*[text()='Find the default select radio button']/following-sibling::div//div[contains(@class,'ui-state-default ui-state-active')]/parent::div/following-sibling::label`).innerText();
    console.log(`Default Selected Radio Button: ${defaultSelectedRadioButton}`);
    await page.locator(`//*[text()='Your most favorite browser']/following-sibling::div//label[text()='Chrome']`).click();
    await page.locator(`//*[text()='UnSelectable']/following-sibling::div//label[text()='Chennai']`).click();
   const selectedAgeGroup = page.locator("//*[text()='Select the age group (only if not selected)']/following-sibling::div//div[contains(@class,'ui-state-active')]");

   if (await selectedAgeGroup.count() === 0) {
    await page.locator("//*[text()='Select the age group (only if not selected)']/following-sibling::div//label[text()='1-20']").click();
   }

   await page.waitForTimeout(3000);
});