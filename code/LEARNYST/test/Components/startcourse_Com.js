var component=require('./component'); 
var page = require('../pages/page');
var startcourse = Object.create(component, {
    startCourseButton: { get: function() { return browser.element('.gotoPaidCourse');}},
    Login_Startcourse: { get: function() { return browser.element('#nav-sign-up');}},
    Signup_StartCourse: { get: function() {return browser.element('[data-link="signup"]');}},
    SignupEmail: { get: function() { return browser.element('#signup-email');}},
    SignupPassword: { get: function() { return browser.element('#signup-password');}},
    doSignup: { get: function() { return browser.element('#js-signup'); }},
    resumeCourse: { get: function() { return browser.element('.js-resume'); }},
    verifyLesson1:{ get: function() { return browser.element('.lSliderPlayer');}},
    selectLesson2:{ get: function() { return browser.element('.theme-col');}},
    verifyLesson2:{ get: function() { return browser.element('.img-responsive');}},
    verifyNavigation:{ get: function() { return browser.element('.line-letter-space');}},
    buyNow:{get: function() { return browser.element('.buyCourse');}},
    selectCountry:{ get: function() { return browser.element('#country-dd');}},
    open: { value: function()  { page.open.call(this, 'learn/My-First-Course'); } },
    paySecurely:{get: function() { return browser.element('#js-paynow');}},
    enterContact:{get: function() { return browser.element('#contact');}},
    selectPaymentType:{get: function() { return browser.element('[tab="netbanking"]');}},
    selectSBI:{get:function(){return browser.element('#bank-radio-ICIC');}},
    selectICICI:{get:function(){return browser.element('#bank-radio-SBIN');}},
    payNow:{get: function() { return browser.element('.pay-btn');}},
    paymentSuccess:{get: function() { return browser.element('.success');}},
});
module.exports = startcourse;


