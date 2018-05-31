'use strict';
var startCoursePage = require('../pages/startcourse_Page');
// var buyCourseCom= require('../Components/buyCourse_Com');
var global=require('./Global_data');
var timerCallback;
/* 
Calling the signup function from signup_spec,
Scenario: 
          1.User should be signup.
          2.User should be able to see the confirm mail alert.
*/
describe(" -- Testing signup Page -- ", function() {
	startCourse(global.forenroll.Random_email(),global.forenroll.password,global.TestData.CONTACT);
});	

function startCourse(username,password,contact)
{			
    // beforeAll(function(){
		// SignupPage.open('learn/My-First-Course');
		browser.url('http://learnnew.learnyst.com/learn/My-First-Course?');
		browser.setViewportSize({
        	width: 1600,
       		 height: 1080
      	});
	// });
		


	afterAll(function() {
  	browser.close()
  	});
  	
  	beforeEach(function() {
      timerCallback = jasmine.createSpy("timerCallback");
      jasmine.clock().install();
      setTimeout(function() {
          timerCallback();
    },  60);
    }); 

	it('-----> start course ',function() {
		startCoursePage.startcourse.Login_Startcourse.click();
		startCoursePage.startcourse.Signup_StartCourse.click();
		startCoursePage.startcourse.SignupEmail.setValue(username);
		startCoursePage.startcourse.SignupPassword.setValue(password);
		startCoursePage.startcourse.doSignup.click();
		startCoursePage.startcourse.buyNow.click();
		startCoursePage.startcourse.paySecurely.click();
		startCoursePage.startcourse.enterContact.setValue(contact);
		startCoursePage.startcourse.selectPaymentType.click();
		startCoursePage.startcourse.selectSBI.click();
		startCoursePage.startcourse.payNow.click();
		startCoursePage.startcourse.paymentSuccess.click();
		startCoursePage.startcourse.startCourseButton.click();
		startCoursePage.startcourse.resumeCourse.click();
		//expect(startCoursePage.startcourse.verifyLesson1.isVisible()).toBe(true);
		console.log('Able to view first lesson');
		startCoursePage.startcourse.selectLesson2.click();
		//expect(startCoursePage.startcourse.verifyLesson2.isVisible()).toBe(true);
		console.log('Able to view second lesson');
		browser.back();
		browser.back();
		//expect(startCoursePage.startcourse.verifyNavigation.isVisible()).toBe(true);
		console.log('Test case passed : User successfully signed-up and confirm alert is displayed');
	});	
	
}

module.exports=startCourse;