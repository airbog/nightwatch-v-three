const { Given, When, Then } = require('@cucumber/cucumber');

const getABTest = () => {
    return browser.page.abTesting();
  } 

Then(/^the AB Testing Page contains Sub-header with text "([^"]*)"$/, async (subheaderText) => {
    await getABTest().verifySubheader(subheaderText);
});

Then(/^the AB Testing Page contains text "([^"]*)"$/, async (text) => {
    await getABTest().verifyText(text);
});