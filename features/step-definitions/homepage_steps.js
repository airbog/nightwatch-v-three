const { Given, When, Then } = require('@cucumber/cucumber');

const getHomepage = () => {
  return browser.page.homePage();
} 

Given(/^I open Herokuapp homepage page$/, async () => {
  await browser.url('https://the-internet.herokuapp.com');
});

Then(/^the Main Homepage Header text is "([^"]*)"$/, async (headerText) => {
  await getHomepage().verifyHeaderText(headerText);
});

Then(/^the page title should contain "([^"]*)"$/, async (titlePart) => {
  await browser.assert.titleContains(titlePart);
});

Then(/^the Main Homepage Footer text is "([^"]*)"$/, async (footerText) => {
  await getHomepage().verifyFooterText(footerText);
});

When(/^I click the link with text "([^"]*)" in Homepage$/, async (textLink) => {
  await getHomepage().clickLink(textLink);
});