describe('Add Products to Cart Details - Succesfull', () => {
  beforeEach(() => {
    cy.fixture('users').then((users) => {
      cy.clearAllAndLogin(users.validUser.username, users.validUser.password)
    })
  })

  it('Should add products to the cart from detail products and verify them', () => {
    cy.contains('.inventory_item_name', 'Sauce Labs Backpack').click()
    cy.get('#add-to-cart').click()

    cy.get('#back-to-products').click()

    cy.contains('.inventory_item_name', 'Sauce Labs Bike Light').click()
    cy.get('#add-to-cart').click()

    cy.get('.shopping_cart_link').click()

    cy.get('.cart_item').should('have.length', 2);
    cy.get('.inventory_item_name').first().should('contain.text', 'Sauce Labs Backpack');
    cy.get('.inventory_item_name').last().should('contain.text', 'Sauce Labs Bike Light');
  })
})