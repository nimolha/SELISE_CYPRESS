class RegistrationPage {
    visit() {
      cy.visit('https://demo.nopcommerce.com/register');
    }
  
    fillRegistrationForm(firstName, lastName, email, password) {
      cy.get('input[name="FirstName"]').type(firstName);
      cy.get('input[name="LastName"]').type(lastName);
      cy.get('input[name="Email"]').type(email);
      cy.get('input[name="Password"]').type(password);
      cy.get('input[name="ConfirmPassword"]').type(password);
      cy.get('button[type="submit"]').click({ multiple: true });
    }
  }
  export default RegistrationPage;