import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { BrokenLinksPage } from "../pagesBDD/brokenLinksPage.js";

When("I click the valid link", async function () {
  this.brokenLinksPage = new BrokenLinksPage(this.page);
  await this.brokenLinksPage.clickValidLink();
});

Then("I should be navigated to a valid page", async function () {
  const url = await this.brokenLinksPage.getCurrentUrl();
  expect(url).toContain("demoqa.com");
  await this.close();
});
