'use strict';

var SignupPage = require('../pages/signup_Page');
var timerCallback;
/* 
Calling the signup function from signup_spec,
Scenario: 
          1.User should be signup.
          2.User should be able to see the confirm mail alert.
*/
// describe(" -- Testing signup Page -- ", function() {
// 	signup(SignupPage.Signup.Random_email(),SignupPage.Signup.Enter_Password);
// });	
function signup(username,pass)
{			

	describe(" -- Testing signup Page -- ", function() {
		beforeEach(function() {
      timerCallback = jasmine.createSpy("timerCallback");
      jasmine.clock().install();
      setTimeout(function() {
          timerCallback();
    },  60);
    }); 

  // afterAll(function() {
  //     browser.close()
  // });

    beforeAll(function(){
			SignupPage.open('signup');
			//browser.windowHandleFullscreen();
		});
		it('-----> should be signed-up by user and confirm alert is displayed',function() {
			SignupPage.Signup.Signup_email.waitForExist(5000);
			SignupPage.Signup.Signup_email.setValue(username);
			SignupPage.Signup.Signup_Password.waitForExist(5000);
			SignupPage.Signup.Signup_Password.setValue(pass);
			SignupPage.Signup.Signup_forFree.waitForExist(5000);
			SignupPage.Signup.Signup_forFree.click();
			SignupPage.Signup.Resend_email.waitForExist(5000);
			expect(SignupPage.Signup.Resend_email.isVisible()).toBe(true);
			console.log('signup success');
		});	
	});	
}

module.exports=signup;