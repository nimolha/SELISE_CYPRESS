import RegistrationPage from "../page_object/register";
import LoginPage from "../page_object/login";
import ChangePasswordPage from "../page_object/change_password";
describe('Changing password', () => {
    const registrationPage = new RegistrationPage();
    const loginPage = new LoginPage();
    const changePasswordPage = new ChangePasswordPage();
  
    let userData;
  
    before(() => {
      cy.fixture("nopcommerce").then((data) => {
        userData = data;
      });
    });
  
    it('should be able to change password', () => {
      registrationPage.visit();
      registrationPage.fillRegistrationForm('Ni', 'Lh', 'niw@example.com', 'password123');
  
      loginPage.visit();
      loginPage.login('niw@example.com', 'password123');
  
      changePasswordPage.visit();
      changePasswordPage.changePassword('password123', '12345678');
      changePasswordPage.validatePasswordChangeSuccess('Password was changed');
    });
  });