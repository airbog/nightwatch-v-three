exports.command = function (xpath) {
    return this.useXpath()
            .waitForElementVisible(xpath, 1500, `Waiting for Xpath ${xpath}`)
            .click(xpath)
            .useCss();
};