const xpaths = {
    addElementButton: `//div[contains(@class, 'example')]/button[text() = 'Add Element']`,
    deleteElementButton: `//div[@id, 'elements']/button[text() = 'Delete']`,
    template: {
    }
}

module.exports = {

    elements: [],

    commands: [{

        async verifyAddElementButton() {
            const xpath = xpaths.addElementButton;
            await this.waitForXpathVisible(xpath, `The Add Element Button is not visible`);
        }

    }]
}