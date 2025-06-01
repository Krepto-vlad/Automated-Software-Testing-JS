import { setWorldConstructor } from "@cucumber/cucumber";
import { chromium } from "playwright";

class CustomWorld {
  async launch() {
    this.browser = await chromium.launch();
    this.page = await this.browser.newPage();
  }

  async close() {
    await this.browser.close();
  }

  getPage() {
    return this.page;
  }
}

setWorldConstructor(CustomWorld);
export { CustomWorld };
