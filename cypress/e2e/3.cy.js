describe('Add New Address Test', () => {
    it('should validate new address form and add a new address successfully', () => {
      //register 
      cy.visit('https://demo.nopcommerce.com/register');

      // Fill in the registration form
      cy.wait(2000); 
      
      cy.get('input[name="FirstName"]').type('Nima');
      cy.get('input[name="LastName"]').type('Lhamo');
      cy.get('input[name="Email"]').type('nim@example.com');
      cy.get('input[name="Password"]').type('password123');
      cy.get('input[name="ConfirmPassword"]').type('password123');
      cy.get('button[type="submit"]').click({ multiple: true });
  
      // Log in to the user's account
      cy.visit('https://demo.nopcommerce.com/login');
      cy.get('input[name="Email"]').type('nim@example.com');
      cy.get('input[name="Password"]').type('password123');
      cy.get('button[type="submit"]').click({ multiple: true });
  
      // Navigate to the "My Account" section
      cy.visit('https://demo.nopcommerce.com/customer/addresses');
      cy.get('button[class="button-1 add-address-button"]').click({ multiple: true });
      // Fill in the new address form
      cy.get('input[name="Address.FirstName"]').type('nima');
      cy.get('input[name="Address.LastName"]').type('lhamo');
      cy.get('input[name="Address.Email"]').type('nima@gmail.com');
      cy.get('input[name="Address.Company"]').type('NNN');
      cy.get('select[name="Address.CountryId"]').select('Bhutan');
      cy.get('select[name="Address.StateProvinceId"]').select('Other');
      cy.get('input[name="Address.City"]').type('gelephu');
      cy.get('input[name="Address.Address1"]').type('Sarpang');
      cy.get('input[name="Address.Address2"]').type('Pelrithang');
      cy.get('input[name="Address.ZipPostalCode"]').type('12345');
      cy.get('input[name="Address.PhoneNumber"]').type('77894563');
      cy.get('input[name="Address.FaxNumber"]').type('2222');
      cy.get('button[type="submit"]').click({ multiple: true });
  
      // Check for success message after adding the address
      cy.contains('The new address has been added successfully.');
  
    });
  });
  