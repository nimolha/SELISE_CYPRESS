class LoginPage {
    visit() {
      cy.visit('https://demo.nopcommerce.com/login');
    }
  
    login(email, password) {
      cy.get('input[name="Email"]').type(email);
      cy.get('input[name="Password"]').type(password);
      cy.get('button[type="submit"]').click({ multiple: true });
    }
  }
  export default LoginPage;