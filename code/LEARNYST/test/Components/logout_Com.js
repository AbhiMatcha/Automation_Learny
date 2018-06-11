'use strict';

var component=require('./component'); 
var page = require('../pages/page');
var Logout = Object.create(page,{
    //User_Profile :{get:  function()  { return browser.element('#userProfileDiv');}},
    User_Profile :{get:  function()  { return browser.element('.dropdown-toggle');}},
    Logout_button :{get:  function()  { return  browser.element('#signOutID');}},
    error:   {get:   function() {return browser.element('.signup-error');}},
    open: { value: function()  { page.open.call(this, 'learn'); } },
    LoginButton_signupFlow: {get: function(){return browser.element('#js-signin');}},
    login_signupFlow : {get: function() {return browser.element('#nav-sign-up');}},
    login_email: {get: function() {return browser.element('#lernystLogin_new_user_user_email');}},
    login_password: {get: function() {return browser.element('#lernystLogin_new_user_user_password');}},
    loggedout_Verify: {get: function() {return browser.element('.js-skipLogin');}},
    // loggedout_Verify: {get: function() {return browser.element('.js-skipLogin');}},
 });

module.exports = Logout;

