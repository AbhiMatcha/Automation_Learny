'use strict';
var component=require('./component'); 
var page = require('../pages/page');
var Signup = Object.create(page,{
   
   /* These elements are through sign up flow*/
   Signup_email :{ get:  function()  { return browser.element('#learnystSignup_new_user_user_email');}},
   Signup_Password :{ get:  function()  { return  browser.element('#learnystSignup_new_user_user_password');}},
   open: { value: function()  { page.open.call(this, 'signup');}},
   Resend_email :{ get: function() {  return browser.element('#resendEmail');}},
   Signup_forFree: { get: function() { return browser.element('#lr_signup_btn');}},
   Enter_Password:{ get : function(){return "abhi1234"; }},
   /*These elements are through course page */
   signup_coursePage: { get: function() { return browser.element('[data-link="signup"]');}},
   signupEmail_coursePage:{get:  function()  { return browser.element('#signup-email');}},
   signupPassword_coursePage:{get:  function()  { return browser.element('#signup-password');}}, 
   signupForFree_coursePage:{get:  function()  { return browser.element('#js-signup');}},
   /* To generate random emails */
   Random_email: { value: function(){
   var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
	var email = '';
	for(var i=0; i<15; i++){
    email += chars[Math.floor(Math.random() * chars.length)];
	}
	var emailID= email + '@yopmail.com';
	return emailID;}},
});

module.exports = Signup;