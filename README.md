# js_cypress_tests

Requirements:
- Node.js (version as in documentation: https://docs.cypress.io/guides/getting-started/installing-cypress)

Set up:
- cd js_cypress_tests
- npm ci / npm install

Run tests:
- npx cypress run (headless mode, by default runs on the Electron browser)
- npx cypress run --browser chrome (or other browser on your OS, e.g. --browser firefox)
- npx cypress open (UI mode -> choose E2E Testing -> choose browser and press start -> click on Questionnaire.cy.js)

Enjoy robots doing the job! :)
