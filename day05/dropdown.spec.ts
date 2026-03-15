import { test, expect } from '@playwright/test';

test("Handling dropdown in select tag", async ({ page }) => {
    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator('//input[@id="username"]').fill("demosalesmanager");
    await page.locator('//input[@id="password"]').fill("crmsfa");
    await page.locator('//input[@class="decorativeSubmit"]').click();
    await page.locator('//a[contains(text(),"CRM")]').click();
    await page.locator('//a[text()="Leads"]').click();
    await page.locator('//a[text()="Create Lead"]').click();
    await page.locator('//input[@id="createLeadForm_companyName"]').fill("Testleaf");
    await page.locator('//input[@id="createLeadForm_firstName"]').fill("Bhavadharini");
    await page.locator('//input[@id="createLeadForm_lastName"]').fill("Duraisamy");
    await page.locator('//select[@id="createLeadForm_industryEnumId"]').selectOption({ value: "IND_AEROSPACE" });
    const allDropdownValues = page.locator('//select[@id="createLeadForm_industryEnumId"]/option');
    const dropDownCount = await allDropdownValues.count(); 

    for (let index = 0; index < dropDownCount; index++) {
        console.log(await allDropdownValues.nth(index).innerText());
    }await page.locator('//input[@name="submitButton"]').click();S
    await expect(page.locator('text=View Lead')).toBeVisible();

});