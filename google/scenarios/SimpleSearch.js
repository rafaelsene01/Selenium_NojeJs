const Page = require('../pages/HomePage');

(async function () {

    homePage = new Page();

    try {
        await homePage.visit('https://www.google.com.br/')
        await homePage.search("SoftBox");
        await homePage.quit();
    } catch (ex) {
        console.log(new Error(ex.message));
    } finally {

    }
})();

// https://medium.com/@bmshamsnahid/automated-testing-with-selenium-webdriver-and-node-js-f99f64720352

// https://github.com/bmshamsnahid/Automation-With-Selenium-And-Node.js/blob/master/utils/fakeData.js

// https://github.com/rafaelsene01/Selenium_NojeJs/tree/master/google