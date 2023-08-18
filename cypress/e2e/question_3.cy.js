import RegistrationPage from "../page_object/register.js";
import LoginPage from "../page_object/login.js";
import AddressesPage from "../page_object/addresspage.js";

describe('Add New Address Test', () => {
    const registrationPage = new RegistrationPage();
    const loginPage = new LoginPage();
    const addressesPage = new AddressesPage();
  
    it('should validate new address form and add a new address successfully', () => {
      registrationPage.visit();
      registrationPage.fillRegistrationForm('Nima', 'Lhamo', 'nim@example.com', 'password123');
  
      loginPage.visit();
      loginPage.login('nim@example.com', 'password123');
  
      addressesPage.visit();
      addressesPage.addNewAddress();
      addressesPage.fillNewAddressForm(
        'nima', 'lhamo', 'nima@gmail.com', 'NNN', 'Bhutan', 'Other', 'gelephu',
        'Sarpang', 'Pelrithang', '12345', '77894563', '2222'
      );
  
      addressesPage.validateSuccessMessage('The new address has been added successfully.');
    });
  });