const assert = require('assert');
const { Given, When, Then } = require('cucumber');

const path = require('path');
const { ServiceBuilder } = require('selenium-webdriver/chrome');
const { Builder, By, Key, until } = require('selenium-webdriver');

const pathDriver = "/home/arthur/personal/tdd_bdd_jasmine_cucumber/driver/chromedriver";
const serviceBuilder = new ServiceBuilder(pathDriver);

const driver = new Builder().forBrowser('chrome').setChromeService(serviceBuilder).build();

Given('I\'m have {string} clients in my database', function (qtd) {
    console.log('insere os dados na pagina');
});

When('I access the home webpage', async function () {
    await driver.get('http://localhost:3000');
    await driver.sleep(1000);
});


Then('see the list of {string} clients', async function (qtd) {
    let list = await driver.findElements(By.className('list__item'));
    assert.equal(list.length, parseInt(qtd));
    await driver.quit();
});