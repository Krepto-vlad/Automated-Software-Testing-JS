import { BasePage } from './index';

export class SelectMenuPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;

    this.withOptGroup = page.locator('#withOptGroup');
    this.selectOne = page.locator('#selectOne');
    this.multiSelect = this.page.locator('#selectMenuContainer svg').nth(2);
    this.oldStyleSelect = page.locator('#oldSelectMenu');
    this.carsMultiSelect = page.locator('#cars');
  }

  async navigate() {
    await this.page.goto('https://demoqa.com/select-menu');
  }

  async selectOptionWithOptGroup(labelText = 'Group 2, option 1') {
    await this.withOptGroup.click();
    await this.page.getByText(labelText, { exact: true }).click();
  }

  async selectTitleOption(labelText = 'Mr.') {
    await this.selectOne.click();
    await this.page.getByText(labelText, { exact: true }).click();
  }

  async selectOldStyle(color = 'Blue') {
    await this.oldStyleSelect.selectOption({ label: color });
  }

async selectMultipleReactOptions(optionLabels = ['Green', 'Blue']) {
  for (const label of optionLabels) {
    await this.multiSelect.click();
    const option = this.page.locator('.css-1n7v3ny-option', { hasText: label });
    await option.waitFor({ state: 'visible' });
    await option.click();
  }
}

  async selectMultipleCars(values = ['audi']) {
    await this.carsMultiSelect.selectOption(values);
  }

  async completeSelectMenuActions() {
    await this.selectOptionWithOptGroup();
    await this.selectTitleOption();
    await this.selectOldStyle();
    await this.selectMultipleReactOptions();
    await this.selectMultipleCars();
  }
}
