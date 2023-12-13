module.exports = {

  // METHODS
  chooseOption(number) {
    cy.get(`[data-cy="screenerRadioButton-${number - 1}"]`).click();
    this.clickButtonNext();
  },

  checkboxes(...args) {
    for (let i = 0; i < args.length; i++) {
      cy.get('.css-1armxhj [type="checkbox"]').eq(args[i] - 1).click();
    }
    this.clickButtonNext();
  },

  fillField(selector, value) {
    cy.get(selector).type(value).should('have.value', value);
  },

  clickButtonNext() {
    cy.get('[data-cy="screenerButtonNext"]').click();
  },

}
