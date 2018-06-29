var discussion_page = require('../pages/discussion_Page');
var signup_com = require('../Components/signup_Com');
var buyCourse_com = require('../Components/buyCourse_Com');
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
   	  buyCourse_com.enrollFree.waitForExist(5000);
  	  buyCourse_com.enrollFree.click();
  	  /*Taking elements from signup components*/
	  signup_com.signup_coursePage.waitForExist(5000);
	  signup_com.signup_coursePage.click();
	  signup_com.signupEmail_coursePage.waitForExist(5000);
	  signup_com.signupEmail_coursePage.setValue(username);
	  signup_com.signupPassword_coursePage.waitForExist(5000);
	  signup_com.signupPassword_coursePage.setValue(password);
	  signup_com.signupForFree_coursePage.waitForExist(5000);
	  signup_com.signupForFree_coursePage.click();
	  /* Taking elements from discussion components*/
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
	  discussion_page.discussion.deleteQuestion.waitForExist(5000);  
});
it('-----> should be complete test-in by user',function() {
	  expect(discussion_page.discussion.deleteQuestion.isVisible()).toBe(true);
	});
 
}

module.exports= discussionFunction;