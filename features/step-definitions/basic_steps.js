const { Given, When, Then } = require('@cucumber/cucumber');

const getBasic = () => {
    return browser.page.basic();
};

Then(/^the element containing text "([^"]*)" is visible$/, async (text) => {
    await getBasic().verifyText(text);
});

Then(/^the Add Element button is visible in the Add Remove Elements page$/, async () => {
    await getBasic().addElementButton().verifyVisible();
});

When(/^I click the Add Element button in the Add Remove Elements page$/, async () => {
    await getBasic().addElementButton().click();
});

Then(/^the Delete button is visible (\d+) times? in the Add Remove Elements page$/, async (count) => {
    await getBasic().deleteElementButton().verifyCountVisible(count);
});

When(/^I click the Delete button on position (\d+) in the Add Remove Elements page$/, async (position) => {
    await getBasic().deleteElementButton().click(position);
});