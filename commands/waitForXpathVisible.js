exports.command = function (xpath, timeout = 5000, message = '') {
  const browser = this;

  browser.perform(() => {
    browser.useXpath();

    browser.waitForElementVisible(xpath, timeout, false, function (result) {
      if (result.status === -1) {
        const errorMsg = message || `Element not visible for XPath: ${xpath}`;
        browser.assert.fail(errorMsg);
      }
    });
  });

  browser.useCss();

  return this;
};