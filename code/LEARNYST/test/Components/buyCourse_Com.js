'use strict';

var component=require('./component'); 

var buycourse = Object.create(component, {
    selectCourse:{get:  function()  { return browser.element('#20744');}},
    coursePrice:{get: function() { return browser.element('.course-price-val'); }},
    open: { value: function()  { page.open.call(this, 'learn/My-First-Course?');}},
    enterCoupon:{get: function() { return browser.element('#coupon-input'); }},
    applyCoupon:{get: function() { return browser.element('#js-apply-coupon'); }},
    buyNow:{get: function() { return browser.element('.buyCourse'); }},
    login_forBuyCourse:{get: function() { return browser.element('#nav-sign-up'); }}, 
    signup_forBuyCourse:{get: function() { return browser.element('[data-link="signup"]'); }}, 
    signupEmail_forBuyCourse:{get:  function()  { return browser.element('#signup-email');}},
    signupPassword_forBuyCourse:{get:  function()  { return browser.element('#signup-password');}}, 
    signupForFree_forBuyCourse:{get:  function()  { return browser.element('#js-signup');}}, 
    paySecurely:{get: function() { return browser.element('#js-paynow'); }},
    selectPaymentType:{get: function() { return browser.element('[tab="netbanking"]');}},
    selectBank:{get:function(){return browser.element('#bank-select');}},
    paymentGatewayPage: {get:function(){return browser.element('#form-common');}},
    payNow:{get: function() { return browser.element('.otp-btn'); }},
    paymentSuccess:{get: function() { return browser.element('.success'); }},
    paymentFailure:{get: function() { return browser.element('.danger'); }},
    startCourse:{get: function() { return browser.element('.gotoPaidCourse'); }},
    VerifyPurchase:{ get: function() { return browser.element('.course-purchased');}},
    selectProfile:{get:  function()  { return browser.element('.dropdown-toggle');}},
    settings: {get:  function()  { return browser.element('#settings');}},
    mobileNumber: {get:  function()  { return browser.element('#mobileNumber');}}, 
    saveSettings: {get:  function()  { return browser.element('#js-setting-submit');}}, 
    submit: { value: function() { this.form.submitForm(); } },
    resumeCourse: { get: function() { return browser.element('.js-resume'); }},
    verifyLesson1:{ get: function() { return browser.element('.lSliderPlayer');}},
    selectLesson2:{ get: function() { return browser.element('.theme-col');}},
    verifyLesson2:{ get: function() { return browser.element('.img-responsive');}},
    verifyNavigation:{ get: function() { return browser.element('.line-letter-space');}},
    
});
module.exports = buycourse;