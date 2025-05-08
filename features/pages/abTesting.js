const xpaths = {
    template: {
        abTestSubHeader: (subHeaderText) => `//h3[contains(text(), '${subHeaderText}')]`,
        abTestText: (subHeaderText) => `//p[contains(text(), '${subHeaderText}')]`,
    }
}


module.exports = {

    elements: [],

    commands: [{

        async verifySubheader(subHeaderText) {
            const xpath = xpaths.template.abTestSubHeader(subHeaderText)
            await this.waitForXpathVisible(xpath, `The subheader text ${subHeaderText} is not visible`);
        },

        async verifyText(text) {
            const xpath = xpaths.template.abTestText(text)
            await this.waitForXpathVisible(xpath, `The text ${text} is not visible`);
        },
    
    }]
}