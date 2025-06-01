import { When, Then } from "@cucumber/cucumber";
import { RadioPage } from "../pagesBDD/radioPage.js";

When("I select the radio button {string}", async function (option) {
  this.radioPage = new RadioPage(this.page);
  await this.radioPage.selectRadio(option);
});

Then("the selected radio result should be {string}", async function (expected) {
  await this.radioPage.verifyResult(expected);
  await this.close();
});
