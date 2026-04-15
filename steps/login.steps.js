const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('que acesso a pagina de login', async function () {
  await this.page.goto('https://www.saucedemo.com/');
});

When(
  'informo usuário {string} e senha {string}',
  async function (usuario, senha) {
    await this.page.fill('#user-name', usuario);
    await this.page.fill('#password', senha);
    await this.page.click('#login-button');
  }
);

Then('devo ser autenticado com sucesso', async function () {
  await expect(this.page).toHaveURL(/inventory.html/);
});