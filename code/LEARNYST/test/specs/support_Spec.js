var support_page = require('../pages/support_Page');
//var startCourse_Com = require('../Components/startCourse_Com');
var global = require('./Global_data');
var timerCallback;
	/* 
Calling the login function from Login_spec,
Scenario: User should be logged-in through sign-up flow.      
*/
describe(" -- Testing free test Page -- ", function() {
  suportFunction(global.forenroll.Random_email.value(),global.forenroll.password);
  });

function suportFunction(username,password){

	beforeEach(function() {
	  timerCallback = jasmine.createSpy("timerCallback");
 	  jasmine.clock().install();
 	  setTimeout(function() {
 	  timerCallback();
    },);
  }); 

	beforeAll(function(){
 	  browser.windowHandleFullscreen();
      support_page.support.open('learn/Learn?'); 
  	  support_page.support.Login_signupFlow.waitForExist(5000);
  	  support_page.support.Login_signupFlow.click();
	  support_page.support.Signup_support.waitForExist(5000);
	  support_page.support.Signup_support.click();
	  support_page.support.Signup_email.waitForExist(5000);
	  support_page.support.Signup_email.setValue(username);
	  support_page.support.Signup_Password.setValue(password);
	  support_page.support.do_Signup.waitForExist(5000);
	  support_page.support.do_Signup.click();
	  support_page.support.supportTab.waitForExist(6000);
	  support_page.support.supportTab.click();
	  support_page.support.subject.waitForExist(3000);
	  support_page.support.subject.setValue("HI this is my notes subject");
	  support_page.support.description.waitForExist(3000);
	  support_page.support.description.setValue("HI this is my notes");
	  support_page.support.checkbox.waitForExist(3000);
	  support_page.support.checkbox.click();
	  support_page.support.submitTicket.waitForExist(3000);
	  support_page.support.submitTicket.click();
	  support_page.support.submitConfirmation.waitForExist(3000);
	  support_page.support.submitConfirmation.click();
	  support_page.support.Signup_support.waitForExist(3000);
	  });

	it('-----> should be complete test-in by user',function() {
		expect(support_page.support.submitConfirmation.isVisible()).toBe(true);
	  
	});
 
}

module.exports= suportFunction;