module.exports = {
    command(xpathSelector, timeout = 5000, message = '') {
      return this.perform((browser, done) => {  
        browser.useXpath();
  
        browser.waitForElementNotPresent(xpathSelector, timeout, false, function (result) {
          browser.useCss();
          if (result.status === false) {
            browser.assert.strictEqual(result.status, 0, message || `Expected element '${xpathSelector}' to be absent but it was still present.`);
          } else {
            browser.assert.ok(true, message || `Element '${xpathSelector}' is not present as expected.`);
          }
          done();
        });
      });
    }
  };