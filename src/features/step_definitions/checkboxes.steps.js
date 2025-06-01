import { When, Then } from "@cucumber/cucumber";
import { CheckboxPage } from "../pagesBDD/checkBoxesPage.js";

When("I expand all checkboxes", async function () {
  this.checkboxPage = new CheckboxPage(this.page);
  await this.checkboxPage.expandAll();
});

When("I select the checkbox {string}", async function (name) {
  await this.checkboxPage.selectCheckbox(name);
});

Then("the checkbox {string} should be checked", async function (name) {
  await this.checkboxPage.verifyCheckboxSelected(name);
  await this.close();
});
