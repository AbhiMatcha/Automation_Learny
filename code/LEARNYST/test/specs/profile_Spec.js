'use strict';
var profilePage = require('../pages/profile_Page');
var global = require('./Global_data');
var timerCallback;
/* 
Calling the signup function from signup_spec,
Scenario: 1. User should be signed-in through sign-up flow. 
          2. User should buy/enroll the course.
          3. User should select payment (ICICI) and complete it.
          4. user should be able to access the course.
*/

// describe(" -- save mobile number  -- ", function() {
//     saveNumber(global.TestData.CONTACT,global.forenroll.Random_email.value(),global.forenroll.password);
// });

function saveNumber(contact,username,pass){

describe(" -- Testing Logout Page -- ", function() {
  
  beforeEach(function() {

      timerCallback = jasmine.createSpy("timerCallback");
      jasmine.clock().install();
      setTimeout(function() {
          timerCallback();
        },60);

    }); 

  beforeAll(function(){
      profilePage.open('signup');
      browser.windowHandleFullscreen(); 
      profilePage.profile.profile_Signup_email.waitForExist(5000);
      profilePage.profile.profile_Signup_email.setValue(username);
      profilePage.profile.profile_Signup_Password.waitForExist(5000);
      profilePage.profile.profile_Signup_Password.setValue(pass);
      profilePage.profile.profile_Signup_forFree.waitForExist(5000);
      profilePage.profile.profile_Signup_forFree.click();
      profilePage.profile.selectProfile.waitForExist(6000);
      profilePage.profile.selectProfile.click();

    });

  it('-----> course should be enrolled by user',function() {

      
      profilePage.profile.settings.waitForExist(5000);
      profilePage.profile.settings.click();
      profilePage.profile.mobileNumber.waitForExist(5000);
      profilePage.profile.mobileNumber.setValue(contact);
      profilePage.profile.saveSettings.waitForExist(5000);
      profilePage.profile.saveSettings.click();
      browser.back();
      console.log('-------------- hi -----------------');

    });
  });

}

module.exports= saveNumber;





