var logoutCom = require('../Components/logout_Com');
var buycourseCom = require('../Components/buyCourse_Com');
var applyCouponCom=require('../Components/applyCoupon_Com');
var buycourseFlow1Page= require('../pages/buyCourse_FLow1_Page');
var global = require('./Global_data');
var timerCallback;
/* 
Calling the signup function from signup_spec,
Scenario: 1. User should be signed-in through course page. 
          2. User should buy/enroll the course.
          3. User should select payment (ICICI) and complete it.
          4. user should be able to access the course.
*/
describe(" -- Testing Course Page -- ", function() {
  buyCourseFlow1(global.TestData.CONTACT,global.TestData.COUPON,global.forenroll.Random_email.value(),global.forenroll.password);
});

function buyCourseFlow1(contact,coupon,email,pass)
{	
  beforeEach(function() {
      timerCallback = jasmine.createSpy("timerCallback");
      jasmine.clock().install();
      setTimeout(function() {
          timerCallback();
        },60);
    }); 

  beforeAll(function(){
      buycourseFlow1Page.buycourse.open('learn/My-First-Course?');
      browser.setViewportSize({
          width: 1700,
          height: 1080
      });
    });

  // afterAll(function() {
  // browser.close()
  // });

  it('-----> course should be enrolled by user',function() {
     logoutCom.login_signupFlow.click();
     buycourseFlow1Page.buycourseFlow1com.signUp.click();
     buycourseFlow1Page.buycourseFlow1com.SignupEmail.setValue(email);
     buycourseFlow1Page.buycourseFlow1com.SignupPassword.setValue(pass);
     buycourseFlow1Page.buycourseFlow1com.SignupforFree.click();
     applyCouponCom.enterCoupon.setValue(coupon);
     applyCouponCom.applyCoupon.click();
     buycourseCom.buyNow.click();
     buycourseCom.paySecurely.click();
     buycourseCom.enterContact.setValue(contact);
     buycourseCom.selectPaymentType.click();
     buycourseCom.selectICICI.click();
     buycourseCom.payNow.click();
     expect(buycourseCom.paymentSuccess.isVisible()).toBe(true);
     expect(buycourseCom.paymentFailure.isVisible()).toBe(true);
     buycourseCom.paymentSuccess.click();
     expect(buycourseCom.startCourse.isVisible()).toBe(true);
     buycourseCom.startCourse.click();
     console.log('yeah clicked course');
     expect(buycourseCom.VerifyPurchase.isVisible()).toBe(true);
     console.log("Test Case: Able to buy the course and start the course");
   });

}
module.exports= buyCourseFlow1;





