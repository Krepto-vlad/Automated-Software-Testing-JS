import { expect } from "@playwright/test";

export class SliderPage {
  constructor(page) {
    this.page = page;
  }

  async moveSliderTo(value) {
    const slider = this.page.locator('input[type="range"]');
    const box = await slider.boundingBox();
    const target = parseInt(value, 10);
    const xOffset = ((target - 0) / (100 - 0)) * box.width;

    await this.page.mouse.move(box.x + 1, box.y + box.height / 2);
    await this.page.mouse.down();
    await this.page.mouse.move(box.x + xOffset, box.y + box.height / 2, {
      steps: 10,
    });
    await this.page.mouse.up();
  }

  async verifySliderValue(expectedValue) {
    const actualValue = await this.page.locator("#sliderValue").inputValue();
    const actual = parseInt(actualValue, 10);
    const expected = parseInt(expectedValue, 10);
    expect(Math.abs(actual - expected)).toBeLessThanOrEqual(1);
  }
}
