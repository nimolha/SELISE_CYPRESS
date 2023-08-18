class CheckoutPage {
    fillLoginInfo(email, password) {
      cy.get('input[name="Email"]').type(email);
      cy.get('input[name="Password"]').type(password);
      cy.get('button[type="submit"]').click({ multiple: true });
    }
  
    validateErrorMessage(message) {
      cy.contains(message);
    }
  }
  export default CheckoutPage;