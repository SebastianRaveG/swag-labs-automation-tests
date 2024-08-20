describe('Sort Products by Name A to Z - Succesfull', () => {
   beforeEach(() => {
    cy.fixture('users').then((users) => {
      cy.clearAllAndLogin(users.validUser.username, users.validUser.password)
    })
  })

  it('Should add products to the cart and verify them', () => {
    cy.get('.product_sort_container').select('Name (A to Z)')

    cy.get('.inventory_item_name').then(($names) => {
      const names = $names.map((index, html) => Cypress.$(html).text()).get();
      const sortedNames = [...names].sort();
      expect(names).to.deep.equal(sortedNames);
    });
  })
})