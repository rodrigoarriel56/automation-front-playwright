import { expect } from '@playwright/test';
import { ActionLogin } from '../actions/actionLogin.js';
import { Given, When, Then } from '@cucumber/cucumber';

const actionLogin = new ActionLogin();
const { Given, When, Then } = require('@cucumber/cucumber');

Given(/^que acesso a página de login$/, async () => {
    await actionLogin.acessarPaginaLogin();
    //return true;
});

When(/^informo usuário "([^"]*)" e senha "([^"]*)"$/, async (usuario, senha) => {
    await this.actionLogin.realizarLogin(usuario, senha);
    return true;
});

Then(/^devo ser autenticado com sucesso$/, async () => {
    await this.actionLogin.validarLoginComSucesso();
    return true;
});