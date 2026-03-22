import { test, expect } from '@playwright/test';

test("Handling Locators", async ({ page }) => {
await page.goto('http://leaftaps.com/opentaps/control/main');
await page.getByRole("textbox",{name:"Username"}).fill("demosalesmanager");
await page.getByLabel("Password"),{exact:true}).fill("crmsfa");
await page.getByRole("button",{name:"Login"}).click();
await page.getByRole("link",{name:"CRM/SFA"}).click();
//await page.getByRole("button",{name:"Logout"}).click();
await page.waitForTimeout(3000);
});
