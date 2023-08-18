class AddressesPage {
    visit() {
      cy.visit('https://demo.nopcommerce.com/customer/addresses');
    }
  
    addNewAddress() {
      cy.get('button[class="button-1 add-address-button"]').click({ multiple: true });
    }
  
    fillNewAddressForm(firstName, lastName, email, company, country, state, city, address1, address2, zip, phone, fax) {
      cy.get('input[name="Address.FirstName"]').type(firstName);
      cy.get('input[name="Address.LastName"]').type(lastName);
      cy.get('input[name="Address.Email"]').type(email);
      cy.get('input[name="Address.Company"]').type(company);
      cy.get('select[name="Address.CountryId"]').select(country);
      cy.get('select[name="Address.StateProvinceId"]').select(state);
      cy.get('input[name="Address.City"]').type(city);
      cy.get('input[name="Address.Address1"]').type(address1);
      cy.get('input[name="Address.Address2"]').type(address2);
      cy.get('input[name="Address.ZipPostalCode"]').type(zip);
      cy.get('input[name="Address.PhoneNumber"]').type(phone);
      cy.get('input[name="Address.FaxNumber"]').type(fax);
      cy.get('button[type="submit"]').click({ multiple: true });
    }
  
    validateSuccessMessage(message) {
      cy.contains(message);
    }
  }
  export default AddressesPage;