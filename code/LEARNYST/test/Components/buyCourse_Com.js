'use strict';

var component=require('./component'); 

var buycourse = Object.create(component, {
    selectCourse:{get:  function()  { return browser.element('#20744');}},
    coursePrice:{get: function() { return browser.element('.course-price-val'); }},
    open: { value: function()  { page.open.call(this, 'learn/My-First-Course?');}},
    buyNow:{get: function() { return browser.element('.buyCourse'); }},
    signup_forBuyCourse:{get: function() { return browser.element('[data-link="signup"]'); }}, 
    signupEmail_forBuyCourse:{get:  function()  { return browser.element('#signup-email');}},
    signupPassword_forBuyCourse:{get:  function()  { return browser.element('#signup-password');}}, 
    signupForFree_forBuyCourse:{get:  function()  { return browser.element('#js-signup');}}, 
    paySecurely:{get: function() { return browser.element('#js-paynow'); }},
    //selectCountry:{get: function() { return browser.element('#country-dd'); }},
    selectCountry:{get: function() { return browser.selectByValue('#country-dd','{"key":"DZ","value":"Algeria"}'); }},
    
    enterContact:{get: function() { return browser.element('#contact'); }},
    selectPaymentType:{get: function() { return browser.element('[tab="netbanking"]');}},
    selectSBI:{get:function(){return browser.element('#bank-radio-ICIC');}},
    selectICICI:{get:function(){return browser.element('#bank-radio-SBIN');}},
    payNow:{get: function() { return browser.element('.pay-btn'); }},
    paymentSuccess:{get: function() { return browser.element('.success'); }},
    paymentFailure:{get: function() { return browser.element('.danger'); }},
    startCourse:{get: function() { return browser.element('.gotoPaidCourse'); }},
    VerifyPurchase:{ get: function() { return browser.element('.course-purchased');}},
});
module.exports = buycourse;