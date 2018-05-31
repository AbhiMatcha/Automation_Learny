var component=require('./component'); 
var startcourse = Object.create(component, {
    startCourseButton: { get: function() { return browser.elements('.gotoPaidCourse'); }},
    Login_Startcourse: { get: function() { return browser.elements('#nav-sign-up'); }},
    Signup_StartCourse: { get: function() { return browser.elements('.theme-text'); }},
    SignupEmail: { get: function() { return browser.elements('#signup-email'); }},
    SignupPassword: { get: function() { return browser.elements('#signup-password'); }},
    doSignup: { get: function() { return browser.elements('.signup-btn'); }},
    resumeCourse: { get: function() { return browser.elements('.js-resume'); }},
    verifyLesson1:{ get: function() { return browser.elements('.lSliderPlayer'); }},
    selectLesson2:{ get: function() { return browser.elements('.theme-col'); }},
    verifyLesson2:{ get: function() { return browser.elements('.img-responsive'); }},
    verifyNavigation:{ get: function() { return browser.elements('.line-letter-space'); }},
    buyNow:{get: function() { return browser.element('.buyCourse'); }},
    paySecurely:{get: function() { return browser.element('#js-paynow'); }},
    enterContact:{get: function() { return browser.element('#contact'); }},
    selectPaymentType:{get: function() { return browser.element('[tab="netbanking"]');}},
    selectSBI:{get:function(){return browser.element('#bank-radio-ICIC');}},
    selectICICI:{get:function(){return browser.element('#bank-radio-SBIN');}},
    payNow:{get: function() { return browser.element('.pay-btn'); }},
    paymentSuccess:{get: function() { return browser.element('.success'); }}
});
module.exports = startcourse;



