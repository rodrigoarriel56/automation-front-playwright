const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('que acesso a pagina de login', async function () {
  await this.loginPage.acessarPaginaLogin();
});

When(
  'informo usuário {string} e senha {string}',
  async function (usuario, senha) {
    await this.loginPage.realizarLogin(usuario, senha);
  }
);

Then('devo ser autenticado com sucesso', async function () {
  const loginComSucesso = await this.loginPage.loginRealizadoComSucesso();
  expect(loginComSucesso).toBe(true);
});