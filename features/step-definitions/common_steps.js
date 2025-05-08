const { Given, When, Then } = require('@cucumber/cucumber');

const getCommon = () => {
    return browser.page.common();
};

When(/^I wait for (\d+) seconds$/, async (seconds) => {
    await browser.pause(parseInt(seconds) * 1000);
});

Then(/^the "([^"]*)" page contains Header with text "([^"]*)"$/, async (page, pageHeader) => {
    await getCommon().verifyPageHeader(page, pageHeader);
});