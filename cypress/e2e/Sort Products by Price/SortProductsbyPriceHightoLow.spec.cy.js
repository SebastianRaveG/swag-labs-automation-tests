describe('Sort Products by Name Z to A - Succesfull', () => {
   beforeEach(() => {

    cy.fixture('users').then((users) => {
      cy.clearAllAndLogin(users.validUser.username, users.validUser.password)
    })
  })

  it('Should add products to the cart and verify them', () => {
    cy.get('.product_sort_container').select('Price (high to low)')
    cy.get('.inventory_item_price').then(($prices) => {
          const prices = $prices.map((index, html) => parseFloat(Cypress.$(html).text().replace('$', ''))).get()
          const sortedPrices = [...prices].sort((a, b) => b - a)
          expect(prices).to.deep.equal(sortedPrices)
        })
  })
})