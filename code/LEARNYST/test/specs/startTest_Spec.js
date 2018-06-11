'use strict';
var startFreeTestPage = require('../pages/startTest_Page');
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
   		startFreeTestPage.startFreeTest.enrollFreeTest.click();	
   		startFreeTestPage.startFreeTest.Signup_StartTest.waitForExist(5000);
		expect(startFreeTestPage.startFreeTest.Signup_StartTest.isVisible()).toBe(true);
		startFreeTestPage.startFreeTest.Signup_StartTest.click();
		startFreeTestPage.startFreeTest.SignupEmail.waitForExist(5000);
		startFreeTestPage.startFreeTest.SignupEmail.setValue(username);
		startFreeTestPage.startFreeTest.SignupPassword.setValue(password);
		startFreeTestPage.startFreeTest.doSignup.waitForExist(5000);
		startFreeTestPage.startFreeTest.doSignup.click();
		startFreeTestPage.startFreeTest.takeTest.waitForExist(5000);
		startFreeTestPage.startFreeTest.takeTest.click();
		startFreeTestPage.startFreeTest.startTest.waitForExist(5000);
		startFreeTestPage.startFreeTest.startTest.click();
		startFreeTestPage.startFreeTest.wrongAnswer.waitForExist(5000);
		startFreeTestPage.startFreeTest.wrongAnswer.click();
		console.log(startFreeTestPage.startFreeTest.wrongAnswer);
		startFreeTestPage.startFreeTest.saveAnswer.click();
		startFreeTestPage.startFreeTest.nextQuestion.click();
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
		global.TestData.pause();
		console.log(startFreeTestPage.startFreeTest.retakeTest);
		startFreeTestPage.startFreeTest.retakeTest.click();
		console.log(startFreeTestPage.startFreeTest.correctAnswer);
		startFreeTestPage.startFreeTest.correctAnswer.click();
		startFreeTestPage.startFreeTest.saveAnswer.click();
		startFreeTestPage.startFreeTest.nextQuestion.click();
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
		console.log('Test completed sucessfully');
		});	
 
}

module.exports= takeFreeTest;