import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
// TODO use .waitForElementState('visible'); or .waitForElementState('attached'); or .waitForElementState('enabled'); for interacting with elements
// avoid hard coding timeouts.
setDefaultTimeout(40 * 1000);
// TODO Remove locators to the page object
Given("I open the checkbox page", async function () {
  await this.launch();
  await this.page.goto("https://demoqa.com/checkbox", { waitUntil: "load" });
});

When("I expand all checkboxes", async function () {
  await this.page.click(".rct-option-expand-all");
});

When("I select the checkbox {string}", async function (name) {
  await this.page.locator(`label span:has-text("${name}")`).click();
});

Then("the checkbox {string} should be checked", async function (name) {
  const selected = await this.page.locator("#result").textContent();
  const normalizedExpected = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  expect(selected.toLowerCase()).toContain(normalizedExpected);
  await this.close();
});
