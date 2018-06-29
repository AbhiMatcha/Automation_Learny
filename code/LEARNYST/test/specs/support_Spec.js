var support_page = require('../pages/support_Page');
var signup_com = require('../Components/signup_Com');
var logout_com = require('../Components/logout_Com');
var global = require('../Temporary/Global_data');
var timerCallback;
	/* 
Calling the login function from Login_spec,
Scenario: User should be logged-in through sign-up flow.      
*/
describe(" -- Testing support test Page -- ", function() {
  suportFunction(global.forenroll.Random_email.value(),global.forenroll.password,global.support.title,global.support.description);
  });

function suportFunction(username,password,title,description){
// describe(" -- Testing free test Page -- ", function() {
	beforeEach(function() {
		timerCallback = jasmine.createSpy("timerCallback");
		jasmine.clock().install();
		setTimeout(function() {
			timerCallback();
		},  60);
	});

	beforeAll(function(){
 	  browser.windowHandleFullscreen();
      support_page.support.open('learn/Learn?');
  	  logout_com.login_signupFlow.waitForExist(5000);
  	  logout_com.login_signupFlow.click();
  	 /*Taking elements from signup components*/
	  signup_com.signup_coursePage.waitForExist(5000);
	  signup_com.signup_coursePage.click();
	  signup_com.signupEmail_coursePage.waitForExist(5000);
	  signup_com.signupEmail_coursePage.setValue(username);
	  signup_com.signupPassword_coursePage.waitForExist(5000);
	  signup_com.signupPassword_coursePage.setValue(password);
	  signup_com.signupForFree_coursePage.waitForExist(5000);
	  signup_com.signupForFree_coursePage.click();
	  /* Taking elements from support components */
	  support_page.support.supportTab.waitForExist(6000);
	  support_page.support.supportTab.click();
	  support_page.support.subject.waitForExist(3000);
	  support_page.support.subject.setValue(title);
	  support_page.support.description.waitForExist(3000);
	  support_page.support.description.setValue(description);
	  support_page.support.checkbox.waitForExist(3000);
	  support_page.support.checkbox.click();
	  support_page.support.submitTicket.waitForExist(3000);
	  support_page.support.submitTicket.click();
	  support_page.support.submitConfirmation.waitForExist(3000);
	  support_page.support.submitConfirmation.click();
	  support_page.support.Signup_support.waitForExist(3000);
	  });

	it('-----> support should be taken by user',function() {
		expect(support_page.support.submitConfirmation.isVisible()).toBe(true);
	  
	});
 // });
}

module.exports= suportFunction;