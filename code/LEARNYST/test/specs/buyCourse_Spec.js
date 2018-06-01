'use strict';
var signupSpec = require('../specs/signup_Spec');
var buycoursePage = require('../pages/buyCourse_Page');
var global = require('./Global_data');
var timerCallback;
/* 
Calling the signup function from signup_spec,
Scenario: 1. User should be signed-in through sign-up flow. 
          2. User should buy/enroll the course.
          3. User should select payment (ICICI) and complete it.
          4. user should be able to access the course.
*/
describe(" -- Testing Course Page -- ", function() {
  enrollCourse(global.TestData.CONTACT);
});

function enrollCourse(contact)
{	
    beforeAll(function(){
      buycoursePage.buycourse.open('learn/My-First-Course?');
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
  
  it('-----> course should be enrolled by user',function() {
     signupSpec.signup(global.forenroll.Random_email.value(),global.forenroll.password);
     //browser.url('http://learnnew.learnyst.com/learn/My-First-Course');
     //buycoursePage.buycourse.selectCourse.click();
     browser.doubleClick(buycoursePage.buycourse.selectCourse);
     buycoursePage.buycourse.buyNow.click();
     buycoursePage.buycourse.paySecurely.click();
     buycoursePage.buycourse.enterContact.setValue(contact);
     buycoursePage.buycourse.selectPaymentType.click();
     buycoursePage.buycourse.selectICICI.click();
     buycoursePage.buycourse.payNow.click();
     expect(buycoursePage.buycourse.paymentSuccess.isVisible()).toBe(true);
     expect(buycoursePage.buycourse.paymentFailure.isVisible()).toBe(true);
     buycoursePage.buycourse.paymentSuccess.click();
     expect(buycoursePage.buycourse.startCourse.isVisible()).toBe(true);
     buycoursePage.buycourse.startCourse.click();
     console.log('yeah clicked course');
     expect(buycoursePage.buycourse.VerifyPurchase.isVisible()).toBe(true);
     console.log("Test Case: Able to buy the course and start the course");
   });
}
module.exports= enrollCourse;





