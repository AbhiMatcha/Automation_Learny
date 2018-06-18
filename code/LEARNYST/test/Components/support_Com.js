var component=require('./component'); 
var page = require('../pages/page');

var support = Object.create(component, {
    open: { value: function()  { page.open.call(this, 'learn/Learn?'); } },
    Login_signupFlow: {get: function(){return browser.element('#nav-sign-up');}},
    Signup_email :{ get:  function()  { return browser.element('#signup-email');}},
    Signup_Password :{ get:  function()  { return  browser.element('#signup-password');}},
   	do_Signup: { get: function() { return browser.element('#js-signup');}},
    supportTab:{get: function() { return browser.element('#nav-support');}}, 
    subject: {get: function() { return browser.element('#title');}},
    description: {get: function() { return browser.element('#description');}},
    checkbox: {get: function() { return browser.element('#viewedhelp');}},
    submitTicket: {get: function() { return browser.element('#submit-ticket');}},
    submitConfirmation: {get: function() { return browser.element('.swal2-confirm');}},
    Signup_support:{get: function() { return browser.element('[data-link="signup"]'); }},
});
module.exports = support;