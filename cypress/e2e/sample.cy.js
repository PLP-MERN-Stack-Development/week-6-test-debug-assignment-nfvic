describe('Sample E2E Test', () => {
  it('Visits the homepage and checks for content', () => {
    cy.visit('http://localhost:3000'); // Change port if your app runs elsewhere
    cy.contains('Welcome').should('be.visible'); // Change text to something on your homepage
  });
}); 