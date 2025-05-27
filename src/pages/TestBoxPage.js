import { BasePage } from './index';

export default class TextBoxPage extends BasePage {
  constructor(page) {
    super(page);
    this.fullNameInput = page.locator('#userName');
    this.emailInput = page.locator('#userEmail');
    this.currentAddressInput = page.locator('#currentAddress');
    this.permanentAddressInput = page.locator('#permanentAddress');
    this.submitButton = page.locator('#submit');

    this.outputSection = page.locator('#output');
    this.nameOutput = page.locator('#name');
    this.emailOutput = page.locator('#email');
    this.currentAddressOutput = page.locator('#output #currentAddress');
    this.permanentAddressOutput = page.locator('#output #permanentAddress');
  }

  async fillTextBoxForm({ fullName, email, currentAddress, permanentAddress }) {
    await this.fullNameInput.fill(fullName);
    await this.emailInput.fill(email);
    await this.currentAddressInput.fill(currentAddress);
    await this.permanentAddressInput.fill(permanentAddress);
  }

  async submitForm() {
    await this.submitButton.click();
  }
}
