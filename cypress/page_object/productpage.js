class ProductPage {
    addToCart() {
      cy.get('button[class="button-2 product-box-add-to-cart-button"]').click({ multiple: true });
    }
  
    addAnotherToCart() {
      cy.get('button[class="button-1 add-to-cart-button"]').click({ multiple: true });
    }
  }
  export default ProductPage;