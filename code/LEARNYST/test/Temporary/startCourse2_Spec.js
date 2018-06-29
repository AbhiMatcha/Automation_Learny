var startCoursePage2 = require('../pages/startCourse2_Page');
var global=require('./Global_data');
var buyCourse_com=require('../Components/buyCourse_Com')
var startTest_com=require('../Components/startTest_Com')
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
	    /* taking the elements from startCourse2 components*/
		startTest_com.resumeButton.waitForExist(5000);
		startTest_com.resumeButton.click();
	    /* Taking elements from start test components */
		startTest_com.takeTest.waitForExist(4000);
		startTest_com.takeTest.click();
		startTest_com.startTest.waitForExist(3000);
		startTest_com.startTest.click();
		global.TestData.shortPause();
		startCoursePage2.startcourse2.answerTest.waitForExist(5000);
		startCoursePage2.startcourse2.answerTest.click();
		startCoursePage2.startcourse2.answerTest.setValue(answer1);
		startTest_com.saveAnswer.waitForExist(5000);
		startTest_com.saveAnswer.click();
		startTest_com.nextQuestion.waitForExist(5000);
		startTest_com.nextQuestion.click();	
		startCoursePage2.startcourse2.answerTest.waitForExist(5000);
		startCoursePage2.startcourse2.answerTest.click();
		startCoursePage2.startcourse2.answerTest.setValue(answer2);
		startTest_com.saveAnswer.waitForExist(5000);
		startTest_com.saveAnswer.click();
		startTest_com.nextQuestion.waitForExist(5000);
		startTest_com.nextQuestion.click();
		startTest_com.submitTest.waitForExist(5000);
		startTest_com.submitTest.click();
	}); 

	it('-----> start course',function() 
	{   
		expect(startTest_com.submitTest.isVisible()).toBe(true);
	});
}

module.exports=StartCourse2;



