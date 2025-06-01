import { When, Then } from "@cucumber/cucumber";
import { DragAndDropPage } from "../pagesBDD/dragAndDropPage.js";

When("I drag the element to the drop zone", async function () {
  this.dragPage = new DragAndDropPage(this.page);
  await this.dragPage.openTab();
  await this.dragPage.performDragAndDrop();
});

Then("the drop zone should show {string}", async function (expectedText) {
  await this.dragPage.verifyDroppedText(expectedText);
  await this.close();
});
