const xpaths = {
    template: {
        homePageHeader: (headerText) => `//h1[contains(text(), '${headerText}')]`,
        homePageSubHeader: (subHeaderText) => `//h2[contains(text(), '${subHeaderText}')]`,
        homePageFooter: (footerText) => `//div[@id = 'page-footer' and normalize-space(.) = '${footerText}']`,
        homePageLink: (linkText) => `//ul/li/a[text() = '${linkText}']`
    }
}

module.exports = {

    elements: [],

    commands: [{
        async verifyHeaderText(headerText) {
            const xpath = xpaths.template.homePageHeader(headerText);
            await this.waitForXpathVisible(xpath, `The header text ${headerText} is not visible`);
        },

        async verifySubHeaderText(subHeaderText) {
            const xpath = xpaths.template.homePageSubHeader(subHeaderText);
            await this.waitForXpathVisible(xpath, `The subheader text ${subHeaderText} is not visible`);
        },

        async verifyFooterText(footerText) {
            const xpath = xpaths.template.homePageFooter(footerText);
            await this.waitForXpathVisible(xpath, `The footer text ${footerText} is not visible`);
        },

        async clickLink(linkText) {
            const xpath = xpaths.template.homePageLink(linkText);
            await this.waitForXpathVisible(xpath, `The link with text ${linkText} is not visible`);
            await this.useXpath().clickXpath(xpath);
        }
    }]
}