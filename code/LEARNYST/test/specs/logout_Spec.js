'use strict';

var LoginCom=require('../Components/login_Com');
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
  beforeEach(function() {
    timerCallback = jasmine.createSpy("timerCallback");
    jasmine.clock().install();
    setTimeout(function() {
    timerCallback();
      },600);
  });

  afterAll(function() {
      browser.close()
  });

  beforeAll(function() {
    LogoutPage.open('learn');
    browser.setViewportSize({
      width: 1600,
      height: 1200
      }); 
    LogoutPage.Logout.login_signupFlow.click();
    LoginCom.login_email.setValue(userName);
    LoginCom.login_Password.setValue(pass);
    LogoutPage.Logout.LoginButton_signupFlow.click();
    LogoutPage.Logout.User_Profile.click();
    LogoutPage.Logout.Logout_button.click();
  }); 
  
 it('-----> should be logged-out by user 1',function() {
   
    LogoutPage.Logout.loggedout_Verify.waitForExist(5000);
    expect(LogoutPage.Logout.loggedout_Verify.isVisible()).toBe(true);
    console.log("Logout is successfull ");  
     });
};
  
module.exports= logout;

