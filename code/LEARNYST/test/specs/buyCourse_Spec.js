'use strict';
var buycoursePage = require('../pages/buyCourse_Page');
var logoutCom=('../Components/logout_Com');
var global = require('./Global_data');
var profileCom= require('../Components/profile_Com');
var timerCallback;
/* 
Calling the signup function from signup_spec,
Scenario: 1. User should be signed-in through sign-up flow. 
          2. User should buy/enroll the course.
          3. User should select payment (ICICI) and complete it.
          4. user should be able to access the course.
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
        },60);
    }); 

    beforeAll(function(){
      browser.windowHandleFullscreen();
      browser.url('http://learnnew.learnyst.com/learn/My-First-Course');
      logoutCom.login_forBuyCourse.waitForExist(5000);
      logoutCom.login_forBuyCourse.click();
      buycoursePage.buycourse.signup_forBuyCourse.waitForExist(5000);
      buycoursePage.buycourse.signup_forBuyCourse.click();
      buycoursePage.buycourse.signupEmail_forBuyCourse.waitForExist(5000);
      buycoursePage.buycourse.signupEmail_forBuyCourse.setValue(username);
      buycoursePage.buycourse.signupPassword_forBuyCourse.waitForExist(5000);
      buycoursePage.buycourse.signupPassword_forBuyCourse.setValue(password);
      buycoursePage.buycourse.signupForFree_forBuyCourse.waitForExist(5000);
      buycoursePage.buycourse.signupForFree_forBuyCourse.click();
      buycoursePage.buycourse.selectProfile.waitForExist(6000);
      buycoursePage.buycourse.selectProfile.click();
      buycoursePage.buycourse.settings.waitForExist(5000);
      buycoursePage.buycourse.settings.click();
      buycoursePage.buycourse.mobileNumber.waitForExist(5000);
      buycoursePage.buycourse.mobileNumber.setValue(contact);
      buycoursePage.buycourse.saveSettings.waitForExist(5000);
      buycoursePage.buycourse.saveSettings.click();
      browser.back();
      buycoursePage.buycourse.enterCoupon.waitForExist(5000);
      buycoursePage.buycourse.enterCoupon.setValue(coupon);
      buycoursePage.buycourse.applyCoupon.waitForExist(5000);
      buycoursePage.buycourse.applyCoupon.click();   
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
      /* until here code works*/
      // global.TestData.pause(); 
      // global.TestData.shortPause();
      // var tabID2 = browser.getTabIds();
      // console.log(tabID2); 
      // browser.switchTab(tabID2[0]);
      // console.log(browser.getCurrentTabId());
      // global.TestData.pause();
      // buycoursePage.buycourse.startCourse.click();
      // console.log(buycoursePage.buycourse.startCourse);
    });

    it('-----> course should be enrolled by user',function() {
      expect(buycoursePage.buycourse.VerifyPurchase.isVisible()).toBe(true);
    });  
//});
}

module.exports= enrollCourse;

