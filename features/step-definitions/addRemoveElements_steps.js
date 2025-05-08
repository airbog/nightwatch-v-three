const { Given, When, Then } = require('@cucumber/cucumber');

const getAddRemoveElements = () => {
    return browser.page.addRemoveElements();
};

Then(/^the Add Element button is visible in the Add Remove Elements page$/, async () => {
    await getAddRemoveElements().verifyAddElementButton();
});