// require('./commands')

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
})

before(() => {
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
});
