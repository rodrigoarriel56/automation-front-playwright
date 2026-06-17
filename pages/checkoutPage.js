class checkoutPage {
  constructor(page) 
  {
    this.page = page;
    this.firstName = '#first-name';
    this.lastName = '#last-name';
    this.postalCode = '#postal-code';
    this.continueButton = 'input[type="submit"]';
    this.finishButton = 'button:has-text("Finish")';
    this.successMessage = '.complete-header';
  }

  async preencherDadosEContinuar(nome, sobrenome, cep) 
  {
  await this.page.locator('#first-name').fill(nome);
  await this.page.locator('#last-name').fill(sobrenome);
  await this.page.locator('#postal-code').fill(cep);
  await this.page.locator('#continue').click();
  }
  
  async finalizarCompra() 
  {
    await this.page.click('#finish');
    await this.page.click(this.cartIcon);
  }
  
  async validarCompraFinalizada() 
  {
    return await this.page.textContent(this.successMessage);
  }
}

module.exports = checkoutPage;