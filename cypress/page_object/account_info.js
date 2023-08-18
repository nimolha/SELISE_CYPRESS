class AccountInfoPage {
    visit() {
      cy.visit('https://demo.nopcommerce.com/customer/info');
    }
  
    editAccountInfo(firstName, lastName, email) {
      cy.get('input[name="FirstName"]').clear().type(firstName);
      cy.get('input[name="LastName"]').clear().type(lastName);
      cy.get('input[name="Email"]').clear().type(email);
    }
  
    saveAccountInfo() {
      cy.get('button[type="submit"]').click({ multiple: true });
      cy.contains('The customer info has been updated successfully');
    }
  }
  export default AccountInfoPage;