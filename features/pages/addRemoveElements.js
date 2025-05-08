const xpaths = {
    addElementButton: `//div[contains(@class, 'example')]/button[text() = 'Add Element']`,
    deleteElementButton: `//div[@id, 'elements']/button[text() = 'Delete']`,
    template: {
        addRemoveSubHeader: (subHeaderText) => `//h3[contains(text(), '${subHeaderText}')]`,
    }
}

module.exports = {

    elements: [],

    commands: [{

        async verifySubheader(subHeaderText) {
            const xpath = xpaths.template.addRemoveSubHeader(subHeaderText);
            await this.waitForXpathVisible(xpath, `The subheader text ${subHeaderText} is not visible`);
        },

        async verifyAddElementButton() {
            const xpath = xpaths.addElementButton;
            await this.waitForXpathVisible(xpath, `The Add Element Button is not visible`);
        }

    }]
}