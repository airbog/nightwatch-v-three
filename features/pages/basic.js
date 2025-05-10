const xpaths = {
    addElementButton: `//div[contains(@class, 'example')]/button[text() = 'Add Element']`,
    deleteElementButton: `//div[contains(@id, 'elements')]/button[text() = 'Delete']`,
    template: {
        abTestText: (subHeaderText) => `//p[contains(text(), '${subHeaderText}')]`,
        deleteElementButtonByPosition: (count) => `//div[contains(@id, 'elements')]/button[text() = 'Delete'][${count}]`,
    }
}

module.exports = {

    elements: [],

    commands: [{
        
        async verifyText(text) {
            const xpath = xpaths.template.abTestText(text)
            await this.waitForXpathVisible(xpath, `The text ${text} is not visible`);
        },

        addElementButton () {
            const xpath = xpaths.addElementButton;
            return {
                verifyVisible: async () => {
                    await this.waitForXpathVisible(xpath, `The Add Element Button is not visible`);
                },
                click: async () => {
                    await this.waitForXpathVisible(xpath, `The Add Element Button is not visible`);
                    await this.clickXpath(xpath);
                }
            }
        },
        deleteElementButton() {
            return {
                verifyCountVisible: async (count) => {
                    if (count === 0) {
                        const xpath = xpaths.deleteElementButton;
                        await this.waitForXpathNotPresent(xpath, `Delete Button is present and should not be.`);
                    } else {
                        const lastItem = xpaths.template.deleteElementButtonByPosition(count);
                        await this.waitForXpathVisible(lastItem, `The Delete Element Button on position ${count} is not visible`);
                        const nextItem = xpaths.template.deleteElementButtonByPosition(parseInt(count+1))
                        await this.waitForXpathNotPresent(nextItem, `There is an extra Delete Button on position ${count + 1}`);
                    }
                },
                click: async (position) => {
                    const xpath = xpaths.template.deleteElementButtonByPosition(position);
                    await this.waitForXpathVisible(xpath, `The Delete Element Button on position ${position} is not visible`);
                    await this.clickXpath(xpath);
                }
            }
        }
    }]
}