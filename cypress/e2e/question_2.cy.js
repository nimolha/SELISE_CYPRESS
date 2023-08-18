import ProductPage from "../page_object/productpage.js";
import HomePage from "../page_object/homepage.js";
import CartPage from "../page_object/cartpage.js";
import CheckoutPage from "../page_object/checkoutpage.js";
describe('E-commerce Checkout Test with Wrong Credentials', () => {
    const homePage = new HomePage();
    const productPage = new ProductPage();
    const cartPage = new CartPage();
    const checkoutPage = new CheckoutPage();
  
    it('should add book to cart, go to cart, attempt checkout with wrong info, and validate errors', () => {
      homePage.visit();
      homePage.searchForProduct('Apple MacBook Pro 13-inch');
  
      productPage.addToCart();
      productPage.addAnotherToCart();
  
      cartPage.visit();
      cartPage.agreeToTerms();
      cartPage.proceedToCheckout();
  
      checkoutPage.fillLoginInfo('wrongemail@example.com', 'wrongpassword');
      checkoutPage.validateErrorMessage('Login was unsuccessful. Please correct the errors and try again.');
    });
  });