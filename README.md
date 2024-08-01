# automation-front-playwright
	
# Descrição da feramenta Playwright
	
	O Playwright Test foi criado especificamente para acomodar as necessidades de testes ponta a ponta.
	 Playwright oferece suporte a todos os mecanismos de renderização modernos, incluindo Chromium, WebKit e Firefox.
	  Teste em Windows, Linux e macOS, localmente ou em CI, headless ou headless com emulação móvel nativa do Google 
	   Chrome para Android e Mobile Safari.
   
# Requisitos para a instalação do Playwright
	Garantir que tenha o NPM instalado em seu sistema operacional.

# Caso não tenha o NPM instalado em seu sistema operacional, segue um passo a passo de como fazer a instalação e Configuração
	
# Installing Playwright

	Comece instalando o Playwright usando npm ou yarn.
		Alternativamente, você também pode começar e executar seus testes usando a extensão do VS Code ou outra IDE desejada.

Get started by installing Playwright using npm or yarn. Alternatively you can also get started and run your tests using the VS Code Extension.

Instalação via  "npm"

```
npm init playwright@latest
```



1 - Configuração do Ambiente Playwright:
```
Instalar Node.js
```
```
Escolher uma IDE de JavaScript para programar
```
2- Passo de um clone no projeto
```
git clone https://github.com/rodrigoarriel56/automacao-cypress-cucumber.git
```
3- Passo de entrar na pasta do projeto
```
cd automacao-cypress-cucumber.git
``` 
4- Instalar o Cypress com Cucumber executando o seguinte comando na raíz da pasta do seu projeto
```
npm install
```
5 - Passo de execução dos testes
5.1 - Para iniciar os testes, execute um dos seguintes comandos no terminal do VS Code:

```
Para executar os testes via terminal: npx cypress run
```
```
Para executar os testes via browser: npx cypress run --browser chrome --no-exit
```
```
Para executar os testes via script salvo em package.json: npm run test:chrome    

```
