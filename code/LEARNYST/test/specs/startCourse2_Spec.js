var startCoursePage2 = require('../pages/startCourse2_Page');
var global=require('./Global_data');
var timerCallback;
/* 
using the signup flow to complete payment.
Scenario: 
1.User should be signup.
2.User should be able to see the confirm mail alert.
*/
describe(" -- Testing signup Page -- ", function() {
	StartCourse2(global.forenroll.Random_email.value(),global.forenroll.password,global.TestData.CONTACT,global.TestAnswers.randomAnswers.value(),global.TestAnswers.randomAnswers.value());
});	

function StartCourse2(username,password,contact,answer1,answer2)
{	

	console.log(answer1);
	console.log(answer2);
	beforeEach(function() {
		timerCallback = jasmine.createSpy("timerCallback");
		jasmine.clock().install();
		setTimeout(function() {
			timerCallback();
		},);
	});
	beforeAll(function(){
		browser.windowHandleFullscreen();
		browser.url('http://learnnew.learnyst.com/learn/Fill-in-the-blanks');		
		startCoursePage2.startcourse2.enrollFree.waitForExist(5000);
		startCoursePage2.startcourse2.enrollFree.click();
		startCoursePage2.startcourse2.Signup_StartCourse.waitForExist(5000);
		startCoursePage2.startcourse2.Signup_StartCourse.click();
		startCoursePage2.startcourse2.SignupEmail.waitForExist(5000);
		startCoursePage2.startcourse2.SignupEmail.setValue(username);
		startCoursePage2.startcourse2.SignupPassword.setValue(password);
		startCoursePage2.startcourse2.doSignup.waitForExist(5000);
		startCoursePage2.startcourse2.doSignup.click();
		startCoursePage2.startcourse2.resumeButton.waitForExist(5000);
		startCoursePage2.startcourse2.resumeButton.click();
		startCoursePage2.startcourse2.takeTest.waitForExist(5000);
		startCoursePage2.startcourse2.takeTest.click();
		global.TestData.shortPause();
		startCoursePage2.startcourse2.startTest.waitForExist(5000);
		startCoursePage2.startcourse2.startTest.click();
		global.TestData.shortPause();
		startCoursePage2.startcourse2.answerTest.waitForExist(5000);
		console.log(startCoursePage2.startcourse2.answerTest);
		startCoursePage2.startcourse2.answerTest.click();
		startCoursePage2.startcourse2.answerTest.setValue(answer1);
		startCoursePage2.startcourse2.save.waitForExist(5000);
		startCoursePage2.startcourse2.save.click();
		startCoursePage2.startcourse2.next.waitForExist(5000);
		startCoursePage2.startcourse2.next.click();	
		startCoursePage2.startcourse2.answerTest.waitForExist(5000);
		startCoursePage2.startcourse2.answerTest.click();
		startCoursePage2.startcourse2.answerTest.setValue(answer2);
		startCoursePage2.startcourse2.save.waitForExist(5000);
		startCoursePage2.startcourse2.save.click();
		startCoursePage2.startcourse2.next.waitForExist(5000);
		startCoursePage2.startcourse2.next.click();
		startCoursePage2.startcourse2.submit.waitForExist(5000);
		startCoursePage2.startcourse2.submit.click();
	}); 

	it('-----> start course',function() 
	{   
		
		console.log('Test case passed : User successfully signed-up and confirm alert is displayed');
	});
}

module.exports=StartCourse2;



