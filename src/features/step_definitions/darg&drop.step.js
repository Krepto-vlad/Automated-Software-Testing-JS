import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given("I open the drag and drop page", async function () {
  await this.launch();
  await this.page.goto("https://demoqa.com/droppable");
  await this.page.click("a#droppableExample-tab-simple");
});

When("I drag the element to the drop zone", async function () {
  const source = this.page.locator("#draggable");
  const target = this.page.locator("#simpleDropContainer #droppable");

  await source.hover();
  const sourceBox = await source.boundingBox();
  const targetBox = await target.boundingBox();

  if (sourceBox && targetBox) {
    await this.page.mouse.move(
      sourceBox.x + sourceBox.width / 2,
      sourceBox.y + sourceBox.height / 2
    );
    await this.page.mouse.down();
    await this.page.mouse.move(
      targetBox.x + targetBox.width / 2,
      targetBox.y + targetBox.height / 2
    );
    await this.page.mouse.up();
  }
});

Then("the drop zone should show {string}", async function (expectedText) {
  const dropText = await this.page
    .locator("#simpleDropContainer #droppable p")
    .textContent();
  expect(dropText).toBe(expectedText);
  await this.close();
});
