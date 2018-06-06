'use strict';
var signupSpec = require('../specs/signup_Spec');
var buycoursePage = require('../pages/buyCourse_Page');
var applyCouponPage = require('../Pages/applyCoupon_Page');
var global = require('./Global_data');
var timerCallback;
/* 
Calling the signup function from signup_spec,
Scenario: 1. User should be signed-in through sign-up flow. 
          2. User should buy/enroll the course.
          3. User should select payment (SBI) and complete it by using coupon.
          4. user should be able to access the course.
*/
describe(" -- Testing applycoupon Page -- ", function() {
  applySmartCoupon(global.TestData.COUPON);
});

function applySmartCoupon(smartCoupon)
{	
    beforeAll(function(){
      applyCouponPage.applycoupon.open('signup');
      browser.windowHandleFullscreen();
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

  signupSpec.signup(global.forenroll.Random_email.value(),global.forenroll.password);
  console.log(coursePage.course.selectCourse);
  
  it('-----> course should be enrolled by user',function() {
     buycoursePage.buycourse.selectCourse.click();
     applyCouponPage.applycoupon.enterCoupon.setValue(smartCoupon);
     applyCouponPage.applycoupon.applyCoupon.click();
     buycoursePage.buycourse.buyNow.click();
     buycoursePage.buycourse.paySecurely.click();
     buycoursePage.buycourse.enterContact.setValue(contact);
     buycoursePage.buycourse.selectPaymentType.click();
     buycoursePage.buycourse.selectSBI.click();
     buycoursePage.buycourse.payNow.click();
     expect(buycoursePage.buycourse.paymentSuccess.isVisible()).toBe(true);
     expect(buycoursePage.buycourse.paymentFailure.isVisible()).toBe(true);
     buycoursePage.buycourse.paymentSuccess.click();
     expect(buycoursePage.buycourse.startCourse.isVisible()).toBe(true);
     buycoursePage.buycourse.startCourse.click();
     console.log('yeah clicked course');
     expect(buycoursePage.buycourse.VerifyPurchase.isVisible()).toBe(true);
     console.log("Test Case: Able to buy the course by applying coupon and start the course");
   });
}
module.exports= enrollCourse;





