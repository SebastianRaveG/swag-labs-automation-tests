describe('Login Functionality - Blocked Cases', () => {
  beforeEach(() => {
    cy.fixture('users').then((users) => {
      cy.clearAllAndLogin(users.blockedUser.username, users.blockedUser.password)
    })
  })

  it('Should show an error message with blocked credentials', () => {
    cy.get('.error-message-container').should('be.visible')  // Asegúrate de usar el selector adecuado
  })

})