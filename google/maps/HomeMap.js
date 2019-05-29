const screenShot = require('../utils/Evidence');
const { By, Key, until } = require('selenium-webdriver');

module.exports = {
    inputPesquisar: async function (driver, data, text, index) {
        await driver.findElement(By.xpath("//input[@title='Pesquisar']")).sendKeys(text);
        await screenShot.takeEvidence(driver, data, text, index);
    },
    buttonPesquisar: async function (driver, data, text, index) {
        await driver.findElement(By.xpath("(//input[@value='Pesquisa Google'])[1]")).click();
        await screenShot.takeEvidence(driver, data, text, index);
    }
}