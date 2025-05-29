import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given("I open the radio button page", async function () {
  await this.launch();
  await this.page.goto("https://demoqa.com/radio-button");
});

When("I select the radio button {string}", async function (option) {
  const radioLabel = this.page.locator(`label:has-text("${option}")`);
  await radioLabel.waitFor({ state: "visible", timeout: 10000 });
  await radioLabel.click();
});

Then("the selected radio result should be {string}", async function (expected) {
  const result = await this.page.locator(".text-success").textContent();
  expect(result).toBe(expected);
  await this.close();
});
