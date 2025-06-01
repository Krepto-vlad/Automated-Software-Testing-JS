import { When, Then } from "@cucumber/cucumber";
import { SliderPage } from "../pagesBDD/sliderPage.js";

When("I move the slider to {string}", async function (value) {
  this.sliderPage = new SliderPage(this.page);
  await this.sliderPage.moveSliderTo(value);
});

Then("the slider value should be {string}", async function (expectedValue) {
  await this.sliderPage.verifySliderValue(expectedValue);
  await this.close();
});
