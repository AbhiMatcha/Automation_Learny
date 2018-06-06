var discussion_page = require('../pages/discussion_Page');
//var startCourse_Com = require('../Components/startCourse_Com');
var global = require('./Global_data');
var timerCallback;
	/* 
Calling the login function from Login_spec,
Scenario: User should be logged-in through sign-up flow.      
*/
describe(" -- Testing free test Page -- ", function() {
  discussionFunction(global.forenroll.Random_email.value(),global.forenroll.password);
  });

function discussionFunction(username,password){

	beforeEach(function() {
	  timerCallback = jasmine.createSpy("timerCallback");
 	  jasmine.clock().install();
 	  setTimeout(function() {
 	  timerCallback();
    },60);
  }); 

	afterAll(function() {
	  browser.close()
 	 });

	beforeAll(function(){
 		 browser.windowHandleFullscreen();
  	 	 discussion_page.discussion.open('learn/Learn?'); 
});

it('-----> should be complete test-in by user',function() {
	  discussion_page.discussion.enrollFree.click();
	  discussion_page.discussion.Signup_StartCourse.waitForExist(5000);
	  discussion_page.discussion.Signup_StartCourse.click();
	  discussion_page.discussion.SignupEmail.waitForExist(5000);
	  discussion_page.discussion.SignupEmail.setValue(username);
	  discussion_page.discussion.SignupPassword.setValue(password);
	  discussion_page.discussion.doSignup.waitForExist(5000);
	  discussion_page.discussion.doSignup.click();
	  discussion_page.discussion.discussionTab.click();
	  discussion_page.discussion.ask.click();
	  discussion_page.discussion.enterQuestion.setValue("HI this is my question");
	});
 
}

module.exports= discussionFunction;