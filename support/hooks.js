const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const fs = require('fs');
const path = require('path');

setDefaultTimeout(60 * 1000);

Before(async function () {
  await this.init();
});

After(async function (scenario) {
  // cria pasta de screenshots se não existir
  const screenshotsDir = path.resolve('screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir);
  }

  // nome do arquivo com cenário
  const scenarioName = scenario.pickle.name.replace(/[^a-zA-Z0-9]/g, '_');
  const screenshotPath = path.join(
    screenshotsDir,
    `${scenarioName}.png`
  );

  await this.page.screenshot({
    path: screenshotPath,
    fullPage: true
  });

  await this.close();
});