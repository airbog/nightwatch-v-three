const xpaths = {
    template: {
        pageHeader: (headerText) => `//h3[contains(text(), '${headerText}')] | //h2[contains(text(), '${headerText}')]`,
    }
}

module.exports = {

    elements: [],

    commands: [{
        async verifyPageHeader(page, pageHeader) {
            const xpath = xpaths.template.pageHeader(pageHeader);
            await  this.waitForXpathVisible(xpath, `The Page ${page} header ${pageHeader} is not visible`);
        }
    }]
}