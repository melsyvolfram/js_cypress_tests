const button = require('../components/button');
const answer = require('../components/answer');

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

    answer.fillField('input#metric', '18');
    answer.fillField('input#us', '25');
    answer.clickButtonNext();

    answer.fillField('input#email', 'test@gmail.com');
    answer.fillField('input#zip-code', '00100');
    cy.get(button.submit).click();
    cy.url().should('include', '/sv-FI/ar-studies/fail/criteria?screenerId=');

  })

})
