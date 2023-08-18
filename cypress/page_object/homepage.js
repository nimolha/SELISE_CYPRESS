class HomePage {
    visit() {
      cy.visit('https://demo.nopcommerce.com/');
    }
  
    searchForProduct(productName) {
      cy.get("#small-searchterms").type(productName);
      cy.get('button[type="submit"]').click({ multiple: true });
    }
  }
  export default HomePage;