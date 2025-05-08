const xpaths = {
    addElementButton: `//div[contains(@class, 'example')]/button[text() = 'Add Element']`,
    deleteElementButton: `//div[@id, 'elements']/button[text() = 'Delete']`,
    template: {
        abTestText: (subHeaderText) => `//p[contains(text(), '${subHeaderText}')]`,
    }
}

module.exports = {

    elements: [],

    commands: [{
        
        async verifyText(text) {
            const xpath = xpaths.template.abTestText(text)
            await this.waitForXpathVisible(xpath, `The text ${text} is not visible`);
        },

        async verifyAddElementButton() {
            const xpath = xpaths.addElementButton;
            await this.waitForXpathVisible(xpath, `The Add Element Button is not visible`);
        },
    }]
}