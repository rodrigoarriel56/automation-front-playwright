const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');
const LoginPage = require('../pages/pagelogin');
const InventoryPage = require('../pages/inventoryPage');
const CartPage = require('../pages/cartPage');
const CheckoutPage = require('../pages/checkoutPage');

let browser;
let page;

let loginPage;
let inventoryPage;
let cartPage;
let checkoutPage;

Given('que acesso a pagina de login', async function () 
{
  await this.loginPage.acessarPaginaLogin();
});

When('informo usuário {string} e senha {string}',
  async function (usuario, senha) 
  {
    await this.loginPage.realizarLogin(usuario, senha);
  }
);

Then('finalizo a compra com sucesso', async function () 
{
  await checkoutPage.finalizarCompra();
  const mensagem = await checkoutPage.validarCompraFinalizada();
  expect(mensagem).toContain('Thank you for your order!');
  await browser.close();
});