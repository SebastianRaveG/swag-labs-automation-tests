describe('Login Functionality - Success Cases', () => {
  beforeEach(() => {
    cy.fixture('users').then((users) => {
      cy.clearAllAndLogin(users.validUser.username, users.validUser.password)
    })
  })

  it('Complete Check out', () => {
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#add-to-cart-sauce-labs-bike-light').click()
    cy.get('.shopping_cart_link').click()

    cy.get('.cart_item').should('have.length', 2)
    cy.get('.inventory_item_name').first().should('contain.text', 'Sauce Labs Backpack')
    cy.get('.inventory_item_name').last().should('contain.text', 'Sauce Labs Bike Light')
    cy.get('#checkout').click()
    
    cy.get('.title').should('contain.text', 'Checkout: Your Information')
    
    cy.get('#first-name').type('Usuario')
    cy.get('#last-name').type('Pruebas')
    cy.get('#postal-code').type(17001)
    cy.get('#continue').click()
    
    cy.get('.title').should('contain.text', 'Checkout: Overview')
    cy.get('.cart_item').should('have.length', 2)
    cy.get('.inventory_item_name').first().should('contain.text', 'Sauce Labs Backpack')
    cy.get('.inventory_item_name').last().should('contain.text', 'Sauce Labs Bike Light')
    
    cy.get('#finish').click()
    cy.get('.title').should('contain.text', 'Checkout: Complete!')
    
    cy.get('#back-to-products').click()
    cy.url().should('include', '/inventory.html')
  })
})