describe('Changing password', () => {
  it('should be able to change password', () => {
    // Visit the e-commerce website's registration page
    cy.visit('https://demo.nopcommerce.com/register');

    // Fill in the registration form
    cy.wait(2000); 
    
    cy.get('input[name="FirstName"]').type('Ni');
    cy.get('input[name="LastName"]').type('Lh');
    cy.get('input[name="Email"]').type('niw@example.com');
    cy.get('input[name="Password"]').type('password123');
    cy.get('input[name="ConfirmPassword"]').type('password123');
    cy.get('button[type="submit"]').click({ multiple: true });

    // Once registered, log in to the account
    cy.wait(2000);
    cy.visit('https://demo.nopcommerce.com/login');
    cy.get('input[name="Email"]').type('niw@example.com');
    cy.get('input[name="Password"]').type('password123');
    cy.get('button[type="submit"]').click({ multiple: true });

    // change the password
    cy.visit('https://demo.nopcommerce.com/customer/changepassword');
    cy.get('input[name="OldPassword"]').clear().type('password123');
    cy.get('input[name="NewPassword"]').clear().type('12345678');
    cy.get('input[name="ConfirmNewPassword"]').clear().type('12345678');

    // Save the updated information
    cy.get('button[type="submit"]').click({ multiple: true });
    //validate succesful password change
    cy.contains('Password was changed')

   
  });
});