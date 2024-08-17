describe('Logout Functionality - Success Cases', () => {
  beforeEach(() => {
    // Cargar datos de usuario válido
    cy.fixture('users').then((users) => {
      cy.clearAllAndLogin(users.validUser.username, users.validUser.password)
      cy.get('#react-burger-menu-btn').click()
      cy.get('#logout_sidebar_link').click()

    })
  })

  it('Should log in with valid credentials', () => {
    cy.url().should('include', '')
  })

})