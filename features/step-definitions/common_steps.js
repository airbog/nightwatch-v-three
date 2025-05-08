const { Given, When, Then } = require('@cucumber/cucumber');

When(/^I wait for (\d+) seconds$/, async (seconds) => {
    await browser.pause(parseInt(seconds) * 1000);
});