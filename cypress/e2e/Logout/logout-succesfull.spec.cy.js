describe('Logout Functionality - Success Cases', () => {
  beforeEach(() => {
    // Cargar datos de usuario válido
    cy.fixture('users').then((users) => {
      cy.clearAllAndLogin(users.validUser.username, users.validUser.password)
    })
  })

  it('Should log in with valid credentials', () => {
      cy.get('#react-burger-menu-btn').click()
      cy.get('#logout_sidebar_link').click()
      cy.url().should('include', '')
   })
})