
Cypress.Commands.add('clearAll', () => {
    cy.clearCookies()
})

Cypress.Commands.add('clearAllAndLogin', (username, password) => {
    cy.clearCookies()
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type(username)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
})