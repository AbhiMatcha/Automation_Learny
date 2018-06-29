'use strict';
var buycoursePage = require('../pages/buyCourse_Page');
var logoutCom=('../Components/logout_Com');
var global = require('../Temporary/Global_data');
var profileCom= require('../Components/profile_Com');
var applyCoupon_com=require('../Components/applyCoupon_Com');
var signUp_com=require('../Components/signup_Com');
var timerCallback;
/* 
Scenario: 1. User should be signed-in through sign-up flow. 
          2. USer should save his/her number in profile page
          2. User should enroll the course.
          3. User should select payment (ICICI) and complete it.
          4. payment should be successfull
*/

describe(" -- Testing Course Page -- ", function() {
    enrollCourse(global.TestData.CONTACT,global.forenroll.Random_email.value(),global.forenroll.password,global.TestData.COUPON);
});

function enrollCourse(contact,username,password,coupon)
{	
  // describe(" -- Testing Course Page -- ", function() {
    beforeEach(function() {
    timerCallback = jasmine.createSpy("timerCallback");
    jasmine.clock().install();
    setTimeout(function() {
      timerCallback();
    },  60);
  });


    beforeAll(function(){
      browser.windowHandleFullscreen();
      buycoursePage.buycourse.open('learn/My-First-Course');
      
      // browser.url('http://learnnew.learnyst.com/learn/My-First-Course');
      /* Taking components from logout components*/
      logoutCom.login_signupFlow.waitForExist(5000);
      logoutCom.login_signupFlow.click();
      /* taking components from signup components */
      signUp_com.signup_coursePage.waitForExist(5000);
      signUp_com.signup_coursePage.click();
      signUp_com.signupEmail_coursePage.waitForExist(5000);
      signUp_com.signupEmail_coursePage.setValue(username);
      signUp_com.signupPassword_coursePage.waitForExist(5000);
      signUp_com.signupPassword_coursePage.setValue(password);
      signUp_com.signupForFree_coursePage.waitForExist(5000);
      signUp_com.signupForFree_coursePage.click();
      /* taking components from profile components */
      profileCom.selectProfile.waitForExist(6000);
      profileCom.selectProfile.click();
      profileCom.settings.waitForExist(5000);
      profileCom.settings.click();
      profileCom.mobileNumber.waitForExist(5000);
      profileCom.mobileNumber.setValue(contact);
      profileCom.saveSettings.waitForExist(5000);
      profileCom.saveSettings.click();
      browser.back();
      /* taking components from applyCoupon components */
      applyCoupon_com.enterCoupon.waitForExist(5000);
      applyCoupon_com.enterCoupon.setValue(coupon);
      applyCoupon_com.applyCoupon.waitForExist(5000);
      applyCoupon_com.applyCoupon.click(); 
      /*These components related to buy course*/
      buycoursePage.buycourse.buyNow.waitForExist(5000);
      buycoursePage.buycourse.buyNow.click();
      buycoursePage.buycourse.paySecurely.waitForExist(5000);
      buycoursePage.buycourse.paySecurely.click();
      browser.waitForExist('iframe.razorpay-checkout-frame');
      var my_frame = $('iframe.razorpay-checkout-frame').value;
      browser.frame(my_frame); 
      buycoursePage.buycourse.selectPaymentType.waitForExist(5000);
      buycoursePage.buycourse.selectPaymentType.click();
      buycoursePage.buycourse.selectBank.selectByValue(global.randomBank.bank.value());
      buycoursePage.buycourse.payNow.waitForExist(5000);
      buycoursePage.buycourse.payNow.click();
      global.TestData.pause(); 
      var tabID = browser.getTabIds();
      console.log(tabID);
      browser.switchTab(tabID[1]);
      console.log(browser.getCurrentTabId());
      buycoursePage.buycourse.paymentSuccess.waitForExist(5000);
      buycoursePage.buycourse.paymentSuccess.click();
    });

    it('-----> course should be enrolled by user',function() {
      expect(buycoursePage.buycourse.VerifyPurchase.isVisible()).toBe(true);
    });  
// });
}

module.exports= enrollCourse;

