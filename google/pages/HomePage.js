const screenShot = require('../utils/Evidence');
const homeMap = require('../maps/homeMap');

module.exports = {

    search: async function (driver, text) {
        const data = await screenShot.getDateAndTime();
        let index = 0;

        await driver.get('http://www.google.com');
        await screenShot.takeEvidence(driver, data, "home", index++)
        await homeMap.inputPesquisar(driver, data, text, index++);
        await homeMap.buttonPesquisar(driver, data, "pesquisar", index++);
    }
}