const button = require('../components/button');
const answer = require('../components/answer');
const applicant = require('../factories/applicant');
const successfullyRegisteredPage = require('../pages/successfullyRegisteredPage');
const downloadsFolder = Cypress.config('downloadsFolder');
const path = require('path');

describe('Questionnaire', () => {

  it('Valid answers on all questions', () => {

    cy.visit('/sv-FI/studies-overview');
    cy.get(button.allowAllCookies).click();
    cy.get(button.startStudy).click();
    cy.get(button.getStarted).eq(0).click();

    answer.chooseOption(1);
    answer.chooseOption(3);
    answer.chooseOption(2);
    answer.checkboxes(1, 2, 3, 4);
    answer.chooseOption(1);

    answer.fillField('input.css-951n7m', '17');
    answer.clickButtonNext();

    answer.fillField('input#metric', '167');
    answer.fillField('input#us', '60');
    answer.clickButtonNext();

    cy.get('img[alt="Female Icon"]').click();
    answer.clickButtonNext();

    cy.get('select option:selected').should('have.value', 'FI');
    answer.fillField('input.css-951n7m', '00100');
    answer.clickButtonNext();

    cy.get('[data-cy="postalCodeConfirmationHeader"]').should('be.visible');
    cy.get(button.confirm).click();
    cy.get(button.choose, { timeout: 8000 }).click();

    cy.get('.css-lw6zoz form').should('be.visible');
    const newApplicant = applicant.build();
    cy.log(JSON.stringify(newApplicant));
    answer.fillField('#first-name', newApplicant.firstName);
    answer.fillField('#last-name', newApplicant.lastName);
    answer.fillField('#email', newApplicant.email);
    answer.fillField('#telephoneNumber', newApplicant.phone);
    cy.get('#date').click();
    cy.get('[aria-current="date"]').click();
    cy.get('#timeslot').select(2);
    cy.get(button.submit).click();

    cy.get('#consent-checkbox').click().should('be.checked');
    cy.get(button.submit).click();

    cy.url({ timeout: 8000 }).should('include', '/sv-FI/ar-studies/success?screenerId=');
    cy.get(successfullyRegisteredPage.header1).should('be.visible');
    cy.get(successfullyRegisteredPage.header2).should('be.visible');
    cy.get(button.addToContacts).click();

    const filename = path.join(downloadsFolder, 'clinlife-contact.vcf');
    cy.readFile(filename, { timeout: 8000 });

    // TODO: Add check that email was really sent, e.g. by connecting to database or by API endpoint.

  })

})
