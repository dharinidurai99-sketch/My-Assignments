import { test, expect } from '@playwright/test';

test("Handling dropdown", async ({ page }) => {
    // 1. Navigate to URL
    await page.goto('https://leafground.com/select.xhtml');

    // 2. Select your favorite UI automation tool using the select option
    await page.selectOption('//select[@class="ui-selectonemenu"]', { value: "Playwright" });

    // 3. Print all the dropdown values and get the count
    const allDropdownValues = page.locator('//select[@class="ui-selectonemenu"]/option');
    const dropDownCount = await allDropdownValues.count();
    console.log("Total dropdown options:", dropDownCount);

    // Loop through all options and print text
    for (let i = 0; i < dropDownCount; i++) {
        console.log(await allDropdownValues.nth(i).innerText());
    }
    //4. Choose your preferred Country
    await page.locator('//label[@id="j_idt87:country_label"]').click();
    await page.locator('//li[@data-label="India"]').click();
    //5. Confirm Cities belongs to Country is loaded or not
    await page.locator('//label[@id="j_idt87:city_label"]').click();
    await page.locator('//li[@data-label="Bengaluru"]').click();
    //6. Choose any three courses from the dropdown
    const courses = ["Playwright", "ReactJs", "PostMan"];
    const dropdownInput = page.locator('//input[@id="j_idt87:auto-complete_input"]');
    for (const course of courses) {
    await dropdownInput.click(); // open dropdown
    await page.locator(`//li[@data-item-label="${course}"]`).waitFor({ state: 'visible' });
    await page.locator(`//li[@data-item-label="${course}"]`).click();
}
    //7.Choose a language and print all the values from the dropdown. 
    await page.locator('//label[@id="j_idt87:lang_label"]').click();
    await page.locator('//li[@data-label="Tamil"]').click();
    //8. Select 'Two' irrespective of the language chosen
     await page.locator('//label[@id="j_idt87:value_label"]').click();
     await page.locator('//li[@data-label="இரண்டு"]').click();
     await page.locator('//li[@data-label="மூன்று"]').click();
});