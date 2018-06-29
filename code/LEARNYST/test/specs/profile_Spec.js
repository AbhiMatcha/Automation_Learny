'use strict';
var profilePage = require('../pages/profile_Page');
var global = require('../Temporary/Global_data');
var signUp_com=require('../Components/signup_Com');
var timerCallback;
/* 
Calling the signup function from signup_spec,
Scenario: 1. User should be signed-in through sign-up flow. 
          2. User should be navigated to profile page.
          3. User should save his/her number.
*/

describe(" -- save mobile number  -- ", function() {
    saveNumber(global.TestData.CONTACT,global.forenroll.Random_email.value(),global.forenroll.password);
});

function saveNumber(contact,username,pass){
   // function saveNumber(contact){
  
// describe(" -- Testing Logout Page -- ", function() {
  beforeEach(function() {
    timerCallback = jasmine.createSpy("timerCallback");
    jasmine.clock().install();
    setTimeout(function() {
      timerCallback();
    },  60);
  });

  beforeAll(function(){
      profilePage.open('signup');
      browser.windowHandleFullscreen(); 
      /* taking elements from signup components */
      signUp_com.Signup_email.waitForExist(5000);
      signUp_com.Signup_email.setValue(username);
      signUp_com.Signup_Password.waitForExist(5000);
      signUp_com.Signup_Password.setValue(pass);
      signUp_com.Signup_forFree.waitForExist(5000);
      signUp_com.Signup_forFree.click();
      /* taking elements from profile components */
      profilePage.profile.selectProfile.waitForExist(5000);
      profilePage.profile.selectProfile.click();
      profilePage.profile.settings.waitForExist(5000);
      profilePage.profile.settings.click();
      profilePage.profile.mobileNumber.waitForExist(5000);
      profilePage.profile.mobileNumber.setValue(contact);
      profilePage.profile.saveSettings.waitForExist(5000);
      profilePage.profile.saveSettings.click();
    });
  it('-----> course should be enrolled by user',function() {
    expect(profilePage.profile.VerifyNumberSaved.isVisible()).toBe(true);
    });
  // });
}
module.exports= saveNumber;





