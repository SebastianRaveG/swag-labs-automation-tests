
Cypress.Commands.add('clearAll', () => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
})

Cypress.Commands.add('clearAllAndLogin', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type(username)
    cy.get('#password').type(password)
    cy.screenshot('before-click');
    cy.get('#login-button').click()
    cy.screenshot('after-click');
})