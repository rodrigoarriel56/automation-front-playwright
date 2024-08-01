[![Badge ServeRest](https://img.shields.io/badge/API-ServeRest-green)](https://github.com/ServeRest/ServeRest/)

# automation-front-playwright

Este é um projeto de automação de testes utilizando [Playwright Test](https://playwright.dev/) tendo como base de testes os seguintes [API](https://serverest.dev/) E [Front-end](https://front.serverest.dev/).

## Pre-requisitos

### Node.js

Certifique-se de ter a versão correta das ferramentas, que pode ser encontrada em `.nvmrc` arquivo na raiz do repositório. Verificar as framewoks instalados [nvm](https://github.com/nvm-sh/nvm) para gerenciar diferentes versões de nó em seu ambiente.

### Yarn

The project also uses [Yarn](https://yarnpkg.com/), so follow the [installation steps](https://classic.yarnpkg.com/lang/en/docs/install/) in case you don't have it.

### Docker

The projects used Docker to spin up ServeRest API. Follow instructions from their [official docs](https://docs.docker.com/engine/install/) to install Docker engine in your environment.

## Running locally
- Install dependencies: `yarn install`
- Start Serverest server: `yarn api:start`
- Run API tests: `yarn test:api`
- Run End-to-end tests: `yarn test:e2e`
- Run Visual Regression tests: `yarn test:visual` (you will need a Happo account and `HAPPO_API_KEY`/`HAPPO_API_SECRET` environment variables set)

### Debugging

To run Playwright in debug mode, pass the `PWDEBUG=1` environment variable in the command, for example: `PWDEBUG=1 yarn test:e2e`

When a test fails, the project is configured to save screenshots and a trace file, inside `test-reports` folder. You can run [Playwright's Trace Viewer](https://playwright.dev/docs/trace-viewer) with `show-trace` command: `yarn playwright show-trace test-results/some-test-path/trace.zip`

Please refer to [Playwright's Debugging docs](https://playwright.dev/docs/debug) for further information on debugging features.

### Tips

- To stop running ServeRest container: `docker stop serverest`
- To restart ServeRest container: `docker restart serverest`
- To remove ServeRest container (no need to stop it first, the `-f` option will force its removal even if it is running): `docker rm -f serverest`

## Reporting

Test reports can be generated with [Allure reports](https://github.com/allure-framework/allure2), following the steps below:

- Generate report: `yarn allure:generate`
- Open HTML report: `yarn allure:open`  

## CI

The project uses [GitHub Actions](https://docs.github.com/en/actions) and tests are run automatically on PRs and on merge to `main` branch.
