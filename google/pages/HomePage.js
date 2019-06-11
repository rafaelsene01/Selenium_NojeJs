const homeMap = require('../maps/HomeMap');
const Page = require('./BasePage');

Page.prototype.search = async function (txt) {
    let searchInput = await this.findByXPath(homeMap.inputPesquisarXPath);
    await this.evidence('home')
    await this.write(searchInput, txt);
    await this.evidence('sendKeys')
    let searchButton = await this.findByXPath(homeMap.buttonPesquisarXPath);
    await searchButton.click();
    await this.evidence('click')
};

module.exports = Page;