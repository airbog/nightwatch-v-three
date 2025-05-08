const xpaths = {
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
    
    }]
}