import { expect } from "@playwright/test";

export class DragAndDropPage {
  constructor(page) {
    this.page = page;
  }

  async openTab() {
    await this.page.click("a#droppableExample-tab-simple");
  }

  async performDragAndDrop() {
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
  }

  async verifyDroppedText(expectedText) {
    const text = await this.page.locator("#simpleDropContainer #droppable p").textContent();
    expect(text).toBe(expectedText);
  }
}
