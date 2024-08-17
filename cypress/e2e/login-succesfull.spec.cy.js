describe('Login Functionality - Success Cases', () => {
  beforeEach(() => {
    // Cargar datos de usuario válido
    cy.fixture('users').then((users) => {
      cy.clearAllAndLogin(users.validUser.username, users.validUser.password)
    })
  })

  it('Should log in with valid credentials', () => {
    cy.url().should('include', '/inventory.html')
  })

})