import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given("I open the broken links page", async function () {
  await this.launch();
  await this.page.goto("https://demoqa.com/broken");
});

When("I click the valid link", async function () {
  await this.page.locator('a[href="http://demoqa.com"]').click();
});

Then("I should be navigated to a valid page", async function () {
  const url = this.page.url();
  expect(url).toContain("demoqa.com");
  await this.close();
});
