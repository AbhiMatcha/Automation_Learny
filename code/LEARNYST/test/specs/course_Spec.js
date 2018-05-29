'use strict';
var signupSpec = require('../specs/signup_Spec');
var coursePage = require('../pages/course_Page');
var courseCom = require('../Components/course_Com');
var global = require('./Global_data');
var timerCallback;
/* 
Calling the signup function from signup_spec,
Scenario: 1. User should be signed-in through sign-up flow. 
          2. User should buy/enroll the course.
          3. user should be able to access the course.
*/
describe(" -- Testing Course Page -- ", function() {
  enrollCourse();
});

function enrollCourse()
{	
    beforeAll(function(){
      coursePage.course.open('signup');
      browser.setViewportSize({
          width: 1700,
          height: 1080
      });
    });

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

  signupSpec.signup(global.forenroll.Random_email(),global.forenroll.password);
  
  it('-----> course should be enrolled by user',function() {
     // coursePage.course.selectCourse = "My First Course";
     // coursePage.course.selectCourse.click();
     // coursePage.selectCourse = "My First Course";
     coursePage.course.selectCourse.click();
     expect(coursePage.course.buyNow.isVisible()).toBe(true);
     console.log('yeah clicked course');
    
   });
}
module.exports= enrollCourse;





