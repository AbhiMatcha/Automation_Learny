'use strict';
var LogoutPage=require('../pages/logout_Page');
var loginCom=require('../Components/login_Com');
var profileCom=require('../Components/profile_Com');
var global=require('./Global_data');
var timerCallback;
/* 
Calling the logout function from Logout_spec,
Scenario: User should be logged-in through sign-up flow.
          User should be logged-out
*/

// describe(" -- Testing Logout Page -- ", function() {
//   logout(global.sup.username,global.sup.password); // logging out once user logged-in
// });

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
    // LogoutPage.open('learn');
    // browser.windowHandleFullscreen();
    // LogoutPage.Logout.login_signupFlow.waitForExist(4000);
    // LogoutPage.Logout.login_signupFlow.click();
    // loginCom.login_email.waitForExist(5000);
    // loginCom.login_email.setValue(userName);
    // loginCom.login_Password.waitForExist(5000);
    // loginCom.login_Password.setValue(pass);  
    // LogoutPage.Logout.login.waitForExist(5000);
    // LogoutPage.Logout.login.click();
    profileCom.selectProfile.waitForExist(6000);
    profileCom.selectProfile.click();
    profileCom.signout.waitForExist(5000);
    profileCom.signout.click();
    LogoutPage.Logout.loggedout_Verify.waitForExist(4000);
  });
  it('-----> should be logged-out by user 1',function() {
    expect(LogoutPage.Logout.loggedout_Verify.isVisible()).toBe(true);
     }); 
});
 
};
  
module.exports= logout;

