var startCoursePage = require('../pages/startCourse_Page');
var LoginPage = require('../pages/login_Page');
var global=require('./Global_data');
var timerCallback;
/* 
using the signup flow to complete payment.
Scenario: 
1.User should be signup.
2.User should be able to see the confirm mail alert.
*/
describe(" -- Testing signup Page -- ", function() {
	StartCourse(global.forenroll.Random_email.value(),global.forenroll.password,global.TestData.CONTACT);
});	

function StartCourse(username,password,contact)
{	
	beforeEach(function() {
		timerCallback = jasmine.createSpy("timerCallback");
		jasmine.clock().install();
		setTimeout(function() {
			timerCallback();
		},  60);
	});

	// afterAll(function() {
	// 	browser.close();
	// });

	beforeAll(function(){
		startCoursePage.open('learn/My-First-Course');
		browser.setViewportSize({
			width: 1600,
			height: 1200
		});
		console.log(global.TestData.CONTACT);
		startCoursePage.startcourse.buyNow.click();
		startCoursePage.startcourse.Signup_StartCourse.waitForExist(5000);
		startCoursePage.startcourse.Signup_StartCourse.click();
		startCoursePage.startcourse.SignupEmail.setValue(username);
		startCoursePage.startcourse.SignupPassword.setValue(password);
		startCoursePage.startcourse.doSignup.waitForExist(5000);
		startCoursePage.startcourse.doSignup.click();
		startCoursePage.startcourse.paySecurely.waitForExist(5000);
		startCoursePage.startcourse.paySecurely.click();
		startCoursePage.startcourse.enterContact.waitForExist(5000);
		startCoursePage.startcourse.enterContact.setValue(contact);
		startCoursePage.startcourse.selectPaymentType.click();
		startCoursePage.startcourse.selectSBI.click();
		startCoursePage.startcourse.payNow.click();
		startCoursePage.startcourse.paymentSuccess.click();
		startCoursePage.startcourse.startCourseButton.click();
		startCoursePage.startcourse.resumeCourse.click();

	}); 

	it('-----> start course',function() 
	{
		// // startCoursePage.startcourse.Login_Startcourse.click();
		// startCoursePage.startcourse.buyNow.click();
		// // startCoursePage.startcourse.Signup_StartCourse.waitForExist(5000);
		// startCoursePage.startcourse.Signup_StartCourse.click();
		// startCoursePage.startcourse.SignupEmail.setValue(username);
		// startCoursePage.startcourse.SignupPassword.setValue(password);
		// startCoursePage.startcourse.doSignup.click();
		// startCoursePage.startcourse.paySecurely.click();
		// startCoursePage.startcourse.enterContact.setValue(contact);
		// startCoursePage.startcourse.selectPaymentType.click();
		// startCoursePage.startcourse.selectSBI.click();
		// startCoursePage.startcourse.payNow.click();
		// startCoursePage.startcourse.paymentSuccess.click();
		// startCoursePage.startcourse.startCourseButton.click();
		// startCoursePage.startcourse.resumeCourse.click();
		expect(startCoursePage.startcourse.verifyLesson1.isVisible()).toBe(true);
		console.log('Able to view first lesson');
		startCoursePage.startcourse.selectLesson2.click();
		expect(startCoursePage.startcourse.verifyLesson2.isVisible()).toBe(true);
		console.log('Able to view second lesson');
		browser.back();
		browser.back();
		expect(startCoursePage.startcourse.verifyNavigation.isVisible()).toBe(true);
		console.log('Test case passed : User successfully signed-up and confirm alert is displayed');
	});
}

module.exports=StartCourse;



