
import { chromium, firefox, test, webkit } from "@playwright/test"; // test function is imported from playwright library



test(`Test to launch a browser`, async ({page}) => {


const browser =await chromium.launch({channel: 'msedge', headless: false}) // Step1 launching the browser
const context = await browser.newContext() // Step2 creating a new context
const page =await context.newPage() // Step3 new page created 


await page.goto('https://www.flipkart.com/');


// page.url();


// await page.title()


await page.waitForTimeout(3000)





/* await returns promise has three stages 
1. pending\
2. resolve --> it has completed the action to be performed
3. rejected */



})




// what is the syntax to launch edge driver
// const browser = await chromium.launch({
// channel: 'msedge',
// headless: false
// });