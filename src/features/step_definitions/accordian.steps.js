import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given("I open the accordion page", async function () {
  await this.launch();
  await this.page.goto("https://demoqa.com/accordian");
});
// TODO Remove locators to the page object
When("I expand the {string} section", async function (sectionTitle) {
  const section = this.page.locator(`#section1Heading >> text=${sectionTitle}`);
  await section.click();
});

Then(
  "the content under the {string} section should be visible",
  async function (sectionTitle) {
    const content = this.page.locator("#section1Content");
    await expect(content).toBeVisible();
    const text = await content.textContent();
    expect(text.length).toBeGreaterThan(20);
    await this.close();
  }
);
