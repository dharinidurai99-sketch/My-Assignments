
import test, { expect } from "@playwright/test"
test("Learn Assertions", async ({ page }) => {
await page.goto('https://leafground.com/input.xhtml'); 


const disabledTextBox = page.locator(`//input[@id='j_idt88:j_idt93']`);
await expect(disabledTextBox).toBeDisabled();
console.log("Disabled textbox check passed");


const nameTextBox = page.locator(`//input[@id='j_idt88:name']`);
await expect(nameTextBox).toBeEnabled();
await nameTextBox.fill("Bhavadharini");
console.log("Enabled textbox check passed");


const boxenable = page.locator(`//input[@id='j_idt88:j_idt91']`);
await expect.soft(boxenable).toBeDisabled();
console.log("Soft assertion check passed");

await expect(page.locator(`//input[@id='j_idt88:j_idt95']`)).toBeEnabled();
await page.locator(`//input[@id='j_idt88:j_idt95']`).fill(" ");
await page.locator(`//input[@id='j_idt88:j_idt95']`).fill("Playwright Learning");
});