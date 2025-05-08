const { Given, When, Then } = require('@cucumber/cucumber');

const getAddRemoveElements = () => {
    return browser.page.addRemoveElements();
};

Then(/^the Add Remove Elements Page contains Sub-header with text "([^"]*)"$/, async (subheaderText) => {
    await getAddRemoveElements().verifySubheader(subheaderText);
});

Then(/^the Add Element button is visible in the Add Remove Elements page$/, async () => {
    await getAddRemoveElements().verifyAddElementButton();
});