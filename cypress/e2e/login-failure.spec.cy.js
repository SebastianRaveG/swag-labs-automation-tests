describe('Login Functionality - Failure Cases', () => {
  beforeEach(() => {
    cy.fixture('users').then((users) => {
      cy.clearAllAndLogin(users.invalidUser.username, users.invalidUser.password)
    })
  })

  it('Should show an error message with invalid credentials', () => {
    cy.get('.error-message-container').should('be.visible')  // Asegúrate de usar el selector adecuado
  })

})