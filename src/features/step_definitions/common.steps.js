import { Given } from "@cucumber/cucumber";

Given("I open the {string} page", async function (pageName) {
  await this.launch();
  await this.page.goto(`https://demoqa.com/${pageName}`, { waitUntil: "load" });
});
