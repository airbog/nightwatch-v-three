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

Given(/^I open the page with authentication$/, async() => {
    const url = 'https://admin:admin@the-internet.herokuapp.com/basic_auth';
    await browser.url(url);
})