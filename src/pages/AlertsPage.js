import { BasePage } from "./index";

export default class AlertsPage extends BasePage {
  constructor(page) {
    super(page);
    this.buttonSelectors = {
      alertButton: page.locator("#alertButton"),
      timerAlertButton: page.locator("#timerAlertButton"),
      confirmButton: page.locator("#confirmButton"),
      promptButton: page.locator("#promtButton"),
    };
  }
  async clickButton(name) {
    const button = this.buttonSelectors[name];
    await button.waitFor({ state: "visible" });
    await button.click();
  }
}
