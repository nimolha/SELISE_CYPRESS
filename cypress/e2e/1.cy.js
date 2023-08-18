describe('E-commerce Account Update Test', () => {
  it('should register, edit account info, and save changes', () => {
    // Visit the e-commerce website's registration page
    cy.visit('https://demo.nopcommerce.com/register');

    // Fill in the registration form
    cy.wait(2000); 
    
    cy.get('input[name="FirstName"]').type('Nima');
    cy.get('input[name="LastName"]').type('Lhamo');
    cy.get('input[name="Email"]').type('nimo@example.com');
    cy.get('input[name="Password"]').type('password123');
    cy.get('input[name="ConfirmPassword"]').type('password123');
    cy.get('button[type="submit"]').click({ multiple: true });

    // Once registered, log in to the account
    cy.visit('https://demo.nopcommerce.com/login');
    cy.get('input[name="Email"]').type('nimo@example.com');
    cy.get('input[name="Password"]').type('password123');
    cy.get('button[type="submit"]').click({ multiple: true });
    // Edit account information
    cy.visit('https://demo.nopcommerce.com/customer/info');
    cy.get('input[name="FirstName"]').clear().type('ninox');
    cy.get('input[name="LastName"]').clear().type('Linux');
    cy.get('input[name="Email"]').clear().type('nep@example.com');

    // Save the updated information
    cy.get('button[type="submit"]').click({ multiple: true });
    //validte successfull update of info
    cy.contains('The customer info has been updated successfully')

   
  });
});
