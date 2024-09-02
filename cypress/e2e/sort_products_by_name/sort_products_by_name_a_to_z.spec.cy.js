const viewports = Cypress.config('viewports');
let users;

beforeEach(() => {
  cy.clearAll();
  cy.fixture('users').then((fixtureData) => {
    users = fixtureData;
  });
});

describe('Sort Products by Name A to Z - Succesfull', () => {
  viewports.forEach((size) => {
    Cypress._.each(['validUsers'], (userType) => {

      it(`Should sort products by name a to z for the valid users in ${userType} on ${size} screen`, () => {
        cy.setViewport(size);
        users[userType].forEach((user) => {
          cy.clearAllAndLogin(user.username, user.password);
          cy.get('.product_sort_container').select('Name (A to Z)')

          cy.get('.inventory_item_name').then(($names) => {
            const names = $names.map((index, html) => Cypress.$(html).text()).get();
            const sortedNames = [...names].sort();
            expect(names).to.deep.equal(sortedNames);
          });
        });
      });
    });
  });
});