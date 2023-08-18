class ChangePasswordPage {
    visit() {
      cy.visit('https://demo.nopcommerce.com/customer/changepassword');
    }
  
    changePassword(oldPassword, newPassword) {
      cy.get('input[name="OldPassword"]').clear().type(oldPassword);
      cy.get('input[name="NewPassword"]').clear().type(newPassword);
      cy.get('input[name="ConfirmNewPassword"]').clear().type(newPassword);
      cy.get('button[type="submit"]').click({ multiple: true });
    }
  
    validatePasswordChangeSuccess(message) {
      cy.contains(message);
    }
  }
  export default ChangePasswordPage;