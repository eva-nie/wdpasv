const { addCommands } = require('../../helpers/setup.helper');
const allureReporter = require('@wdio/allure-reporter');

module.exports = {
    before: async function (capabilities, specs, browser) {
        await addCommands();
    },

    afterTest: async function (test, context, result) {
        if (test.failed || result.error) {
            await browser.takeScreenshot();
            allureReporter.addAttachment('URL', await browser.getUrl(), 'text/plain');
        }
    }
};