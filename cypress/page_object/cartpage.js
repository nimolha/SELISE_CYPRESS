class CartPage {
    visit() {
      cy.visit('https://demo.nopcommerce.com/cart');
    }
  
    agreeToTerms() {
      cy.get('input[name="termsofservice"]').click();
      cy.get('input[name="termsofservice"]').should('be.checked');
    }
  
    proceedToCheckout() {
      cy.get('button[name="checkout"]').click({ multiple: true });
    }
  }
  export default CartPage;