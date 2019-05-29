const { Builder, By, Key, until } = require('selenium-webdriver');
const HomePage = require('../pages/HomePage');

(async function () {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await HomePage.search(driver, "SoftBox");
    } finally {
        await driver.quit();
    }
})();