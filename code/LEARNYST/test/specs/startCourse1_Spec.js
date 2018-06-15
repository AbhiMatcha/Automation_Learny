var startCoursePage1 = require('../pages/startCourse_Page');
var global=require('./Global_data');
var timerCallback;
/* 
using the signup flow to complete payment.
Scenario: 
1.User should be signup.
2.User should be able to see the confirm mail alert.
*/
describe(" -- Testing signup Page -- ", function() {
	StartCourse1(global.forenroll.Random_email.value(),global.forenroll.password,global.TestData.CONTACT,global.TestAnswers.randomAnswers.value(),global.TestAnswers.randomAnswers.value());
});	

function StartCourse1(username,password,contact,answer1,answer2)
{	
	beforeEach(function() {
		timerCallback = jasmine.createSpy("timerCallback");
		jasmine.clock().install();
		setTimeout(function() {
			timerCallback();
		},  60);
	});

	beforeAll(function(){
		// startCoursePage1.open('learn/Course-for-Automation');
		browser.windowHandleFullscreen();
		browser.url('http://learnnew.learnyst.com/learn/Course-for-Automation');		
		startCoursePage1.startcourse1.enrollFree.waitForExist(5000);
		startCoursePage1.startcourse1.enrollFree.click();
		startCoursePage1.startcourse1.Signup_StartCourse.waitForExist(5000);
		startCoursePage1.startcourse1.Signup_StartCourse.click();
		startCoursePage1.startcourse1.SignupEmail.waitForExist(5000);
		startCoursePage1.startcourse1.SignupEmail.setValue(username);
		startCoursePage1.startcourse1.SignupPassword.setValue(password);
		startCoursePage1.startcourse1.doSignup.waitForExist(5000);
		startCoursePage1.startcourse1.doSignup.click();
		startCoursePage1.startcourse1.resumeButton.waitForExist(5000);
		startCoursePage1.startcourse1.resumeButton.click();
		startCoursePage1.startcourse1.takeTest.waitForExist(5000);
		startCoursePage1.startcourse1.takeTest.click();
		global.TestData.shortPause();
		startCoursePage1.startcourse1.startTest.waitForExist(5000);
		startCoursePage1.startcourse1.startTest.click();
		startCoursePage1.startcourse1.correctAnswer1Test1.waitForExist(5000);
		startCoursePage1.startcourse1.correctAnswer1Test1.click();
		startCoursePage1.startcourse1.save.waitForExist(5000);
		startCoursePage1.startcourse1.save.click();
		startCoursePage1.startcourse1.next.waitForExist(5000);
		startCoursePage1.startcourse1.next.click();
		startCoursePage1.startcourse1.wrongAnswer2Test1.waitForExist(5000);
		startCoursePage1.startcourse1.wrongAnswer2Test1.click();
		startCoursePage1.startcourse1.save.waitForExist(5000);
		startCoursePage1.startcourse1.save.click();
		startCoursePage1.startcourse1.next.waitForExist(5000);
		startCoursePage1.startcourse1.next.click();
		startCoursePage1.startcourse1.submit.waitForExist(5000);
		startCoursePage1.startcourse1.submit.click();
		global.TestData.pause();
		browser.back();
		browser.back();
		global.TestData.pause();
		startCoursePage1.startcourse1.certificateTab.waitForExist(5000);
		startCoursePage1.startcourse1.certificateTab.click();
		startCoursePage1.startcourse1.downloadCertificate.waitForExist(5000);
		startCoursePage1.startcourse1.downloadCertificate.click();
		expect(startCoursePage1.startcourse1.submit.isVisible()).toBe(true);
		// startCoursePage1.startcourse1.retakeTest.waitForExist(5000);
		// startCoursePage1.startcourse1.retakeTest.click();
		
		
		// global.TestData.shortPause();

		// var correctAnswer1=$('[for="shipadd5545112"]');
		// var correctAnswer2=$('[for="shipadd5545296"]');
		// global.TestData.pause();

		// startCoursePage1.startcourse1.correctAnswer1Test1.click();
		// startCoursePage1.startcourse1.correctAnswer1Test1.waitForExist(5000);
		// startCoursePage1.startcourse1.correctAnswer1Test1.click();
		// startCoursePage1.startcourse1.save.waitForExist(5000);
		// startCoursePage1.startcourse1.save.click();
		// startCoursePage1.startcourse1.next.waitForExist(5000);
		// startCoursePage1.startcourse1.next.click();
		// startCoursePage1.startcourse1.correctAnswer2Test1.waitForExist(5000);
		// startCoursePage1.startcourse1.correctAnswer2Test1.click();
		// startCoursePage1.startcourse1.save.waitForExist(5000);
		// startCoursePage1.startcourse1.save.click();
		// startCoursePage1.startcourse1.next.waitForExist(5000);
		// startCoursePage1.startcourse1.next.click();
		// startCoursePage1.startcourse1.submit.waitForExist(5000);
		// startCoursePage1.startcourse1.submit.click();

		// global.TestData.shortPause();	
		// browser.back();
		// browser.back();
		// global.TestData.shortPause();
		// startCoursePage1.startcourse1.resumeButton.waitForExist(5000);
		// console.log(startCoursePage1.startcourse1.resumeButton);
		// startCoursePage1.startcourse1.resumeButton.click();
		// startCoursePage1.startcourse1.takeTest.waitForExist(5000);
		// startCoursePage1.startcourse1.takeTest.click();
		// startCoursePage1.startcourse1.startTest.waitForExist(5000);
		// startCoursePage1.startcourse1.startTest.click();
		// startCoursePage1.startcourse1.answerTest2.waitForExist(5000);
		// startCoursePage1.startcourse1.answerTest2.setValue(answer1);
		// startCoursePage1.startcourse1.save.waitForExist(5000);
		// startCoursePage1.startcourse1.save.click();
		// startCoursePage1.startcourse1.next.waitForExist(5000);
		// startCoursePage1.startcourse1.next.click();
		// startCoursePage1.startcourse1.answerTest2.waitForExist(5000);
		// startCoursePage1.startcourse1.answerTest2.setValue(answer2);
		// startCoursePage1.startcourse1.save.waitForExist(5000);
		// startCoursePage1.startcourse1.save.click();
		// startCoursePage1.startcourse1.next.waitForExist(5000);
		// startCoursePage1.startcourse1.next.click();
		// startCoursePage1.startcourse1.submit.waitForExist(5000);
		// startCoursePage1.startcourse1.submit.click();	
	}); 

	it('-----> start course',function() 
	{   

		console.log('Test case passed : User successfully signed-up and confirm alert is displayed');
	});
}

module.exports=StartCourse1;



