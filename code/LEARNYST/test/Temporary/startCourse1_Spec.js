var startCoursePage1 = require('../pages/startCourse_Page');
var global=require('./Global_data');
var timerCallback;
var buyCourse_com=require('../Components/buyCourse_Com')
var startTest_com=require('../Components/startTest_Com')
var signUp_com=require('../Components/signup_Com');

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
	    /* taking the elements from startCourse1 components*/
		startTest_com.resumeButton.waitForExist(5000);
		startTest_com.resumeButton.click();
		global.TestData.shortPause();
	    /* Taking elements from start test components */
		startTest_com.takeTest.waitForExist(4000);
		startTest_com.takeTest.click();
		startTest_com.startTest.waitForExist(3000);
		startTest_com.startTest.click();
		/* taking the elements from startCourse1 components*/
		startCoursePage1.startcourse1.correctAnswer1Test1.waitForExist(5000);
		startCoursePage1.startcourse1.correctAnswer1Test1.click();
		startCoursePage1.startcourse1.save.waitForExist(5000);
		startCoursePage1.startcourse1.save.click();
		startCoursePage1.startcourse1.next.waitForExist(5000);
		startCoursePage1.startcourse1.next.click();
		startCoursePage1.startcourse1.wrongAnswer2Test1.waitForExist(5000);
		startCoursePage1.startcourse1.wrongAnswer2Test1.click();
		 /* Taking elements from start test components */
		startTest_com.saveAnswer.waitForExist(5000);
		startTest_com.saveAnswer.click();
		startTest_com.nextQuestion.waitForExist(5000);
		startTest_com.nextQuestion.click();
		startTest_com.submitTest.waitForExist(5000);
		startTest_com.submitTest.click();
		global.TestData.pause();
		browser.back();
		browser.back();
		global.TestData.pause();
		/* taking the elements from startCourse1 components*/
		startCoursePage1.startcourse1.certificateTab.waitForExist(5000);
		startCoursePage1.startcourse1.certificateTab.click();
		startCoursePage1.startcourse1.downloadCertificate.waitForExist(5000);
		startCoursePage1.startcourse1.downloadCertificate.click();
	}); 

	it('-----> start course',function() 
	{   
		expect(startCoursePage1.startcourse1.downloadCertificate.isVisible()).toBe(true);
	});
}

module.exports=StartCourse1;



