import LoginPage from "../page_object/login";
describe('Login Test using Fixture Data', () => {
    const loginPage = new LoginPage();
  
    let userData;
  
    before(() => {
      cy.fixture("nopcommerce").then((data) => {
        userData = data;
      });
    });
  
    it('should log in using fixture data', () => {
      loginPage.visit();
      loginPage.login(userData.email, userData.password);
    });
  });