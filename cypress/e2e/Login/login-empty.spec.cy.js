describe('Login Functionality - Empty Cases', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#login-button').click()
     })

  it('Should show an error message with Username is required', () => {
    cy.get('.error-message-container').should('be.visible')
  })

})