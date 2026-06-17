const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const fs = require('fs');
const path = require('path');

setDefaultTimeout(60 * 1000);

Before(async function () {
  await this.init();
});

After(async function (scenario) {

  const screenshotsDir = path.resolve('screenshots');

  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir);
  }

  const scenarioName = scenario.pickle.name
    .replace(/[^a-zA-Z0-9]/g, '_')
    .toLowerCase();

  const status = scenario.result?.status;

  const screenshotPath = path.join(
    screenshotsDir,
    `${scenarioName}_${status}.png`
  );

  // Tira screenshot SOMENTE se falhar (melhor prática)
  if (status !== 'PASSED') {
    await this.page.screenshot({
      path: screenshotPath,
      fullPage: true
    });
  }

  await this.close();
});