'use strict';
var startFreeTestPage = require('../pages/startTest_Page');
var signUp_com=require('../Components/signup_Com');
var buyCourse_com=require('../Components/buyCourse_Com')
var global = require('./Global_data');
var timerCallback;
	/* 
Calling the login function from Login_spec,
Scenario: User should be logged-in through sign-up flow.      
*/
describe(" -- Testing free test Page -- ", function() {
  takeFreeTest(global.forenroll.Random_email.value(),global.forenroll.password);
  });

function takeFreeTest(username,password){

	beforeEach(function() {
 	 timerCallback = jasmine.createSpy("timerCallback");
 	 jasmine.clock().install();
 	 setTimeout(function() {
 	 timerCallback();
  	  },);
  	}); 

	beforeAll(function(){
		browser.windowHandleFullscreen();
   		startFreeTestPage.startFreeTest.open('learn/Learn?');
		buyCourse_com.enrollFree.waitForExist(5000);
   		buyCourse_com.enrollFree.click();	
   		/* taking components from signup components */
        signUp_com.signup_coursePage.waitForExist(5000);
        signUp_com.signup_coursePage.click();
        signUp_com.signupEmail_coursePage.waitForExist(5000);
        signUp_com.signupEmail_coursePage.setValue(username);
        signUp_com.signupPassword_coursePage.waitForExist(5000);
        signUp_com.signupPassword_coursePage.setValue(password);
    	signUp_com.signupForFree_coursePage.waitForExist(5000);
	    signUp_com.signupForFree_coursePage.click();
	    /* Taking elements from start test components */
		startFreeTestPage.startFreeTest.takeTest.waitForExist(4000);
		startFreeTestPage.startFreeTest.takeTest.click();
		startFreeTestPage.startFreeTest.startTest.waitForExist(3000);
		startFreeTestPage.startFreeTest.startTest.click();
		startFreeTestPage.startFreeTest.wrongAnswer.waitForExist(5000);
		startFreeTestPage.startFreeTest.wrongAnswer.click();
		startFreeTestPage.startFreeTest.saveAnswer.waitForVisible(5000);
		startFreeTestPage.startFreeTest.saveAnswer.click();
		startFreeTestPage.startFreeTest.nextQuestion.waitForVisible(5000);
		startFreeTestPage.startFreeTest.nextQuestion.click();
		startFreeTestPage.startFreeTest.submitTest.waitForVisible(5000);
		startFreeTestPage.startFreeTest.submitTest.click();
		// browser.back();
		// /*This is taking retake from course main page*/
		// startFreeTestPage.startFreeTest.takeTest.waitForExist(3000);
		// startFreeTestPage.startFreeTest.takeTest.click();
		// startFreeTestPage.startFreeTest.startTest.waitForExist(3000);
		// startFreeTestPage.startFreeTest.startTest.click();
		// startFreeTestPage.startFreeTest.wrongAnswer.waitForExist(5000);
		// startFreeTestPage.startFreeTest.wrongAnswer.click();
		// startFreeTestPage.startFreeTest.saveAnswer.click();
		// startFreeTestPage.startFreeTest.nextQuestion.click();
		// startFreeTestPage.startFreeTest.submitTest.click();
		/* This is taking retest from the test completion page*/
		// global.TestData.pause();
		startFreeTestPage.startFreeTest.retakeTest.waitForVisible(5000);
		startFreeTestPage.startFreeTest.retakeTest.click();
		startFreeTestPage.startFreeTest.correctAnswer.waitForVisible(5000);
		startFreeTestPage.startFreeTest.correctAnswer.click();
		startFreeTestPage.startFreeTest.saveAnswer.waitForVisible(5000);
		startFreeTestPage.startFreeTest.saveAnswer.click();
		startFreeTestPage.startFreeTest.nextQuestion.waitForVisible(5000);
		startFreeTestPage.startFreeTest.nextQuestion.click();
		startFreeTestPage.startFreeTest.submitTest.waitForVisible(5000);
		startFreeTestPage.startFreeTest.submitTest.click();
		startFreeTestPage.startFreeTest.solutions.waitForExist(3000);
		startFreeTestPage.startFreeTest.solutions.click();
		startFreeTestPage.startFreeTest.congratsMessage.waitForExist(4000);
		if("Congrats!! You have got this right"=== startFreeTestPage.startFreeTest.congratsMessage)
		{
			console.log("congrats message displayed");
		}
		startFreeTestPage.startFreeTest.explanation.waitForExist(4000);
		if("​My name is Abhi"=== startFreeTestPage.startFreeTest.explanation)
		{
			console.log("explanation is displayed");
		}
		startFreeTestPage.startFreeTest.nextAnswer.click();	
		startFreeTestPage.startFreeTest.lastQuestionPopup.click();
});

	it('-----> should be complete test-in by user',function() {
		expect(startFreeTestPage.startFreeTest.lastQuestionPopup.isVisible()).toBe(true);
		});	
 
}
module.exports= takeFreeTest;