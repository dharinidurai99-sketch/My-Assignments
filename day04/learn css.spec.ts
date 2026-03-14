import { test, expect, firefox } from "@playwright/test"

test(`To interact with Leaf Taps application`, async ({ browserName }) => {

    test.skip(browserName !== 'firefox')

    const browser = await firefox.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    const url = "http://leaftaps.com/opentaps/control/main"
    await page.goto(url)

    await expect(page).toHaveURL(url)

    // Login
    await page.locator("#username").fill("DemoCSR")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()

    // Click CRM/SFA
    const crmsfa = page.locator("[for='crmsfa']")
    await crmsfa.waitFor({ state: "visible" })
    await crmsfa.click()

    console.log("Page Title after login:", await page.title())

    // Leads
    const leads = page.locator(".sectionTabButtonUnselected a").first()
    await leads.waitFor()
    await leads.click()

    console.log("Page Title after Leads:", await page.title())

    // Create Lead
    const createLead = page.locator(".frameSectionBody li").nth(1)
    await createLead.waitFor()
    await createLead.click()

    console.log("Page Title after clicking Create Lead:", await page.title())

    // Fill form
    await page.locator("#createLeadForm_companyName").fill("Nagarro Software Pvt. Ltd")
    await page.locator("#createLeadForm_firstName").fill("Bhavadharini")
    await page.locator("#createLeadForm_lastName").fill("Duraisamy")
    await page.locator("[name='personalTitle']").fill("Ms.Bhavadharini")
    await page.locator("[name='generalProfTitle']").fill("Test Engineer")
    await page.locator("#createLeadForm_annualRevenue").fill("1000000")
    await page.locator("#createLeadForm_departmentName").fill("QA")
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("9894582769")

    await page.locator("input[value='Create Lead']").click()

    const viewLead = page.locator("#sectionHeaderTitle_leads")
    await viewLead.waitFor()

    console.log("Page Title after lead creation:", await page.title())
})
