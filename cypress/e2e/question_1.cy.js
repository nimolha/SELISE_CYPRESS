import RegistrationPage from "../page_object/register.js";
import LoginPage from "../page_object/login.js";
import AccountInfoPage from "../page_object/account_info.js";

  describe('E-commerce Account Update Test', () => {
    const registrationPage = new RegistrationPage();
    const loginPage = new LoginPage();
    const accountInfoPage = new AccountInfoPage();
  
    it('should register, edit account info, and save changes', () => {
      registrationPage.visit();
      registrationPage.fillRegistrationForm('Nima', 'Lhamo', 'nimo@example.com', 'password123');
  
      loginPage.visit();
      loginPage.login('nimo@example.com', 'password123');
  
      accountInfoPage.visit();
      accountInfoPage.editAccountInfo('ninox', 'Linux', 'now@example.com');
      accountInfoPage.saveAccountInfo();
    });
  });
  