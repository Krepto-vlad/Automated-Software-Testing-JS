import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { AccordionPage } from '../pagesBDD/accordionPage.js';

When('I expand the {string} section', async function (sectionTitle) {
  this.accordionPage = new AccordionPage(this.page);
  await this.accordionPage.expandSection(sectionTitle);
});

Then('the content under the {string} section should be visible', async function (sectionTitle) {
  const isVisible = await this.accordionPage.isContentVisible();
  expect(isVisible).toBe(true);

  const textLength = await this.accordionPage.getContentTextLength();
  expect(textLength).toBeGreaterThan(20);

  await this.close();
});

