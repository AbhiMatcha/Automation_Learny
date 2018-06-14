var startCoursePage = require('../pages/startCourse_Page');
var global=require('./Global_data');
var timerCallback;
/* 
using the signup flow to complete payment.
Scenario: 
1.User should be signup.
2.User should be able to see the confirm mail alert.
*/
describe(" -- Testing signup Page -- ", function() {
	StartCourse(global.forenroll.Random_email.value(),global.forenroll.password,global.TestData.CONTACT,global.TestAnswers.randomAnswers.value(),global.TestAnswers.randomAnswers.value());
});	

function StartCourse(username,password,contact,answer1,answer2)
{	
	beforeEach(function() {
		timerCallback = jasmine.createSpy("timerCallback");
		jasmine.clock().install();
		setTimeout(function() {
			timerCallback();
		},  60);
	});

	beforeAll(function(){
		// startCoursePage.open('learn/Course-for-Automation');
		browser.windowHandleFullscreen();
		browser.url('http://learnnew.learnyst.com/learn/Course-for-Automation');		
		startCoursePage.startcourse.enrollFree.waitForExist(5000);
		startCoursePage.startcourse.enrollFree.click();
		startCoursePage.startcourse.Signup_StartCourse.waitForExist(5000);
		startCoursePage.startcourse.Signup_StartCourse.click();
		startCoursePage.startcourse.SignupEmail.waitForExist(5000);
		startCoursePage.startcourse.SignupEmail.setValue(username);
		startCoursePage.startcourse.SignupPassword.setValue(password);
		startCoursePage.startcourse.doSignup.waitForExist(5000);
		startCoursePage.startcourse.doSignup.click();
		startCoursePage.startcourse.resumeButton.waitForExist(5000);
		startCoursePage.startcourse.resumeButton.click();
		startCoursePage.startcourse.takeTest.waitForExist(5000);
		startCoursePage.startcourse.takeTest.click();
		global.TestData.shortPause();
		startCoursePage.startcourse.startTest.waitForExist(5000);
		startCoursePage.startcourse.startTest.click();
		startCoursePage.startcourse.correctAnswer1Test1.waitForExist(5000);
		startCoursePage.startcourse.correctAnswer1Test1.click();
		startCoursePage.startcourse.save.waitForExist(5000);
		startCoursePage.startcourse.save.click();
		startCoursePage.startcourse.next.waitForExist(5000);
		startCoursePage.startcourse.next.click();
		startCoursePage.startcourse.wrongAnswer2Test1.waitForExist(5000);
		startCoursePage.startcourse.wrongAnswer2Test1.click();
		startCoursePage.startcourse.save.waitForExist(5000);
		startCoursePage.startcourse.save.click();
		startCoursePage.startcourse.next.waitForExist(5000);
		startCoursePage.startcourse.next.click();
		startCoursePage.startcourse.submit.waitForExist(5000);
		startCoursePage.startcourse.submit.click();
		global.TestData.pause();
		startCoursePage.startcourse.retakeTest.waitForExist(5000);
		startCoursePage.startcourse.retakeTest.click();
		// global.TestData.shortPause();

		// var correctAnswer1=$('[for="shipadd5545112"]');
		// var correctAnswer2=$('[for="shipadd5545296"]');
		startCoursePage.startcourse.correctAnswer1Test1.waitForExist(5000);
		startCoursePage.startcourse.correctAnswer1Test1.click();
		startCoursePage.startcourse.save.waitForExist(5000);
		startCoursePage.startcourse.save.click();
		startCoursePage.startcourse.next.waitForExist(5000);
		startCoursePage.startcourse.next.click();
		startCoursePage.startcourse.correctAnswer2Test1.waitForExist(5000);
		startCoursePage.startcourse.correctAnswer2Test1.click();
		startCoursePage.startcourse.save.waitForExist(5000);
		startCoursePage.startcourse.save.click();
		startCoursePage.startcourse.next.waitForExist(5000);
		startCoursePage.startcourse.next.click();
		startCoursePage.startcourse.submit.waitForExist(5000);
		startCoursePage.startcourse.submit.click();
		// global.TestData.shortPause();	
		// browser.back();
		// browser.back();
		// global.TestData.shortPause();
		// startCoursePage.startcourse.resumeButton.waitForExist(5000);
		// console.log(startCoursePage.startcourse.resumeButton);
		// startCoursePage.startcourse.resumeButton.click();
		// startCoursePage.startcourse.takeTest.waitForExist(5000);
		// startCoursePage.startcourse.takeTest.click();
		// startCoursePage.startcourse.startTest.waitForExist(5000);
		// startCoursePage.startcourse.startTest.click();
		// startCoursePage.startcourse.answerTest2.waitForExist(5000);
		// startCoursePage.startcourse.answerTest2.setValue(answer1);
		// startCoursePage.startcourse.save.waitForExist(5000);
		// startCoursePage.startcourse.save.click();
		// startCoursePage.startcourse.next.waitForExist(5000);
		// startCoursePage.startcourse.next.click();
		// startCoursePage.startcourse.answerTest2.waitForExist(5000);
		// startCoursePage.startcourse.answerTest2.setValue(answer2);
		// startCoursePage.startcourse.save.waitForExist(5000);
		// startCoursePage.startcourse.save.click();
		// startCoursePage.startcourse.next.waitForExist(5000);
		// startCoursePage.startcourse.next.click();
		// startCoursePage.startcourse.submit.waitForExist(5000);
		// startCoursePage.startcourse.submit.click();
		
	}); 

	it('-----> start course',function() 
	{
		// var correctAnswer1=$('[for="shipadd5545112"]');
		// var correctAnswer2=$('[for="shipadd5545296"]');
		expect(startCoursePage.startcourse.submit.isVisible()).toBe(true);
		console.log('Test case passed : User successfully signed-up and confirm alert is displayed');
	});
}

module.exports=StartCourse;



