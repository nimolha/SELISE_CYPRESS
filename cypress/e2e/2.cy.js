describe('E-commerce Checkout Test with Wrong Credentials', () => {
    it('should add book to cart, go to cart, attempt checkout with wrong info, and validate errors', () => {
      // Visit the e-commerce website
      cy.visit('https://demo.nopcommerce.com/');
  
      // Search for a book
      cy.get("#small-searchterms").type('Apple MacBook Pro 13-inch');
      cy.get('button[type="submit"]').click({ multiple: true });
  
      // Add the book to cart
      cy.get('button[class="button-2 product-box-add-to-cart-button"]').click({ multiple: true });
      cy.visit('https://demo.nopcommerce.com/apple-macbook-pro-13-inch');
      cy.get('button[class="button-1 add-to-cart-button"]').click({ multiple: true });
  
      // Go to the cart
      cy.visit('https://demo.nopcommerce.com/cart');
     
      cy.get('input[name="termsofservice"]').click();

      // Verify checkbox state
      cy.get('input[name="termsofservice"]').should('be.checked');
      
      // Click the "Checkout" button
      cy.get('button[name="checkout"]').click({ multiple: true });
  
      // Fill in the checkout form with wrong email and password
      cy.get('input[name="Email"]').type('wrongemail@example.com');
      cy.get('input[name="Password"]').type('wrongpassword');
      cy.get('button[type="submit"]').click({ multiple: true });
  
      // Validate error messages for email and password
      cy.contains('Login was unsuccessful. Please correct the errors and try again.');
      
    });
  });
  