'use strict';
var startFreeTestPage = require('../pages/startTest_Page');
var startCourse_Com = require('../Components/startCourse_Com');
//var signupSpec=require('./signup_Spec');
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
    },60);
  }); 

afterAll(function() {
  browser.close()
  });

beforeAll(function(){
  // browser.url('http://learnnew.learnyst.com/learn/My-First-Course?');
  browser.windowHandleFullscreen();
  startFreeTestPage.startFreeTest.open('learn/Learn?');
  // signupSpec();
});

it('-----> should be complete test-in by user',function() {

	  console.log('entered in it fucntions');
	  // startFreeTestPage.startFreeTest.selectTest.click();
	  startFreeTestPage.startFreeTest.enrollFreeTest.click();
	  startCourse_Com.Signup_StartCourse.waitForExist(5000);
	  expect(startCourse_Com.Signup_StartCourse.isVisible()).toBe(true);

	});
it('for signup ',function(){
	  
	  startCourse_Com.Signup_StartCourse.click();
	  startCourse_Com.SignupEmail.waitForExist(5000);
	  startCourse_Com.SignupEmail.setValue(username);
	  startCourse_Com.SignupPassword.setValue(password);
	  startCourse_Com.doSignup.waitForExist(5000);
	  startCourse_Com.doSignup.click();
  	  console.log('entered in it fucntions');
  	  startFreeTestPage.startFreeTest.takeTest.waitForExist(10000);
  	  expect(startFreeTestPage.startFreeTest.takeTest.isVisible()).toBe(true);
 });
	
	it('continue the flow',function()
	{
	  
	  clickonsole.log('entered in it fucntions');

	

	  // browser.isEnabled(startFreeTestPage.startFreeTest.takeTest);
	  browser.click(startFreeTestPage.startFreeTest.takeTest);
	 // startFreeTestPage.startFreeTest.takeTest.click();

	  startFreeTestPage.startFreeTest.startTest.waitForExist(10000);
	  
	  startFreeTestPage.startFreeTest.startTest.click();
	
	  startFreeTestPage.startFreeTest.wrongAnswer.click();
	
	  startFreeTestPage.startFreeTest.saveAnswer.click();
	
	  startFreeTestPage.startFreeTest.nextQuestion.click();
	
	  startFreeTestPage.startFreeTest.submitTest.click();
	
	  startFreeTestPage.startFreeTest.retakeTest.click();
	
	  startFreeTestPage.startFreeTest.correctAnswer.click();
	
	  startFreeTestPage.startFreeTest.saveAnswer.click();
	
	  startFreeTestPage.startFreeTest.nextQuestion.click();
	
	  startFreeTestPage.startFreeTest.submitTest.click();
	
	  startFreeTestPage.startFreeTest.viewAnswers.click();
	
	  startFreeTestPage.startFreeTest. congratsMessage.click();
	
	  startFreeTestPage.startFreeTest.explanation.click();
	
	  startFreeTestPage.startFreeTest.nextAnswer.click();
	
	  startFreeTestPage.startFreeTest.lastQuestionPopup.click();

	});
     
	
	
 
}

module.exports= takeFreeTest;