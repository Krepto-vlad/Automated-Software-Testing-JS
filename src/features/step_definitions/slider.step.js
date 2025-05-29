import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given("I open the slider page", async function () {
  await this.launch();
  await this.page.goto("https://demoqa.com/slider", { waitUntil: "load" });
});

When("I move the slider to {string}", async function (targetValue) {
  const slider = this.page.locator('input[type="range"]');
  const box = await slider.boundingBox();

  const min = 0;
  const max = 100;
  const value = parseInt(targetValue, 10);

  const xOffset = ((value - min) / (max - min)) * box.width;

  await this.page.mouse.move(box.x + 1, box.y + box.height / 2);
  await this.page.mouse.down();
  await this.page.mouse.move(box.x + xOffset, box.y + box.height / 2, {
    steps: 10,
  });
  await this.page.mouse.up();
});

Then("the slider value should be {string}", async function (expectedValue) {
  const actualValue = await this.page.locator("#sliderValue").inputValue();
  const expected = parseInt(expectedValue, 10);
  const actual = parseInt(actualValue, 10);
  expect(Math.abs(actual - expected)).toBeLessThanOrEqual(1);
  await this.close();
});
