
Cypress.Commands.add('clearAll', () => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
})

Cypress.Commands.add('clearAllAndLogin', (username, password) => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type(username)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
})