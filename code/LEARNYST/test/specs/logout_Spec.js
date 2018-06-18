'use strict';

var LogoutPage=require('../pages/logout_Page');
var global=require('./Global_data');
var timerCallback;
/* 
Calling the logout function from Logout_spec,
Scenario: User should be logged-in through sign-up flow.
          User should be logged-out
*/
describe(" -- Testing Logout Page -- ", function() {
  logout(global.sup.username,global.sup.password); // logging out once user logged-in
});

function logout(userName,pass)
{   
  describe(" -- Testing Logout Page -- ", function() {
    beforeEach(function() {
    timerCallback = jasmine.createSpy("timerCallback");
    jasmine.clock().install();
    setTimeout(function() {
    timerCallback();
      },600);
  });
  beforeAll(function() {
    LogoutPage.open('learn');
    browser.windowHandleFullscreen();
    LogoutPage.Logout.login_signupFlow.waitForExist(4000);
    LogoutPage.Logout.login_signupFlow.click();
    LogoutPage.Logout.login_email.waitForExist(4000);
    LogoutPage.Logout.login_email.setValue(userName);
    LogoutPage.Logout.login_password.waitForExist(4000);
    LogoutPage.Logout.login_password.setValue(pass);
    LogoutPage.Logout.LoginButton_signupFlow.waitForExist(4000);
    LogoutPage.Logout.LoginButton_signupFlow.click();
    LogoutPage.Logout.User_Profile.waitForExist(5000);
    LogoutPage.Logout.User_Profile.click();
    LogoutPage.Logout.Logout_button.waitForExist(5000);
    LogoutPage.Logout.Logout_button.click();
    console.log("Logout is successfull ");  
  });
  it('-----> should be logged-out by user 1',function() {
    LogoutPage.Logout.loggedout_Verify.waitForExist(4000);
    expect(LogoutPage.Logout.loggedout_Verify.isVisible()).toBe(true);
     }); 
});
 
};
  
module.exports= logout;

