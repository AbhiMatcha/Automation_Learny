var discussion_page = require('../pages/discussion_Page');
//var startCourse_Com = require('../Components/startCourse_Com');
var global = require('./Global_data');
var timerCallback;
	/* 
Calling the login function from Login_spec,
Scenario: User should be logged-in through sign-up flow.      
*/
describe(" -- Testing free test Page -- ", function() {
  discussionFunction(global.forenroll.Random_email.value(),global.forenroll.password,global.discussion.question,global.discussion.editedQuestion);
  });

function discussionFunction(username,password,question,editedQuestion){

	beforeEach(function() {
	  timerCallback = jasmine.createSpy("timerCallback");
 	  jasmine.clock().install();
 	  setTimeout(function() {
 	  timerCallback();
    },60);
  }); 
	
	beforeAll(function(){
 	  browser.windowHandleFullscreen();
   	  discussion_page.discussion.open('learn/Learn?'); 
  	  discussion_page.discussion.enrollFree.click();
	  discussion_page.discussion.Signup_StartCourse.waitForExist(5000);
	  discussion_page.discussion.Signup_StartCourse.click();
	  discussion_page.discussion.SignupEmail.waitForExist(5000);
	  discussion_page.discussion.SignupEmail.setValue(username);
	  discussion_page.discussion.SignupPassword.setValue(password);
	  discussion_page.discussion.doSignup.waitForExist(5000);
	  discussion_page.discussion.doSignup.click();
	  discussion_page.discussion.discussiontab.waitForExist(5000);
	  discussion_page.discussion.discussiontab.click();
	  discussion_page.discussion.ask.waitForExist(5000);
	  discussion_page.discussion.ask.click();
	  discussion_page.discussion.enterQuestion.waitForExist(5000); 
	  discussion_page.discussion.enterQuestion.setValue(question);
	  discussion_page.discussion.postQuestion.waitForExist(5000);
	  discussion_page.discussion.postQuestion.click();
	  discussion_page.discussion.editQuestion.waitForExist(5000);
	  discussion_page.discussion.editQuestion.click();
	  global.TestData.pause();
	  discussion_page.discussion.enterQuestion.waitForExist(5000);
	  browser.elementIdClear(discussion_page.discussion.enterQuestion);   
	  discussion_page.discussion.enterQuestion.setValue(editedQuestion);
	  discussion_page.discussion.postQuestion.waitForExist(5000);
	  discussion_page.discussion.postQuestion.click();	  
	  // discussion_page.discussion.getQuestion.waitForExist(5000);
	  // if(getQuestion === editedQuestion)
	  // {
	  // 	console.log('Edited the question');
	  // }
	  // discussion_page.discussion.deleteQuestion.waitForExist(5000);
	  // discussion_page.discussion.deleteQuestion.click();
	  // discussion_page.discussion.confirmDelete.waitForExist(5000);
	  // discussion_page.discussion.confirmDelete.click();
	  
});
it('-----> should be complete test-in by user',function() {
	
	  expect(discussion_page.discussion.confirmDelete.isVisible()).toBe(true);
	   
	});
 
}

module.exports= discussionFunction;