const { Builder, By, Key, until } = require('selenium-webdriver');
const Evidence = require('../utils/Evidence');
const chrome = require('selenium-webdriver/chrome');

const evi = new Evidence();
let o = new chrome.Options();
// o.addArguments('start-fullscreen');
o.addArguments('disable-infobars');
// o.addArguments('headless'); // running test on visual chrome browser
o.setUserPreferences({ credential_enable_service: false });

var Page = function () {
    this.driver = new Builder()
        .setChromeOptions(o)
        .forBrowser('chrome')
        .build();

    // visit a webpage
    this.visit = async function (theUrl) {
        return await this.driver.get(theUrl);
    };

    // quit current session
    this.quit = async function () {
        return await this.driver.quit();
    };

    // wait and find a specific element with it's XPath
    this.findByXPath = async function (xpath) {
        await this.driver.wait(until.elementLocated(By.xpath(xpath)), 15000, 'Looking for element');
        return await this.driver.findElement(By.xpath(xpath));
    };

    // fill input web elements
    this.write = async function (el, txt) {
        return await el.sendKeys(txt);
    };

    this.evidence = async function (txt) {
        return await evi.takeEvidence(this.driver, txt);
    }
};

module.exports = Page;