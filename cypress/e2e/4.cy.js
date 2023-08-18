describe('Login Test using Fixture Data', () => {
  //delecration of fixture as global function
  let userdata;
  //load the fixture file
    before( ()=>{
      cy.fixture("nopcommerce").then ((data)=>{
        userdata=data;
      })
    })
    it('should log in using fixture data', function () {
      // Visit the login page
      cy.visit('https://demo.nopcommerce.com/login');
      // Fill in the login form with fixture data
      cy.get('input[name="Email"]').type(userdata.email);
      cy.get('input[name="Password"]').type(userdata.password);
      cy.get('button[type="submit"]').click({ multiple: true });
  
      // Assert successful login
      cy.contains('Welcome to our store');
      })
    });
  
  