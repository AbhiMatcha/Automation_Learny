'use strict';

var component=require('./component'); 
var page = require('../pages/page');
var Logout = Object.create(page,{
    //User_Profile :{get:  function()  { return browser.element('#userProfileDiv');}},
    User_Profile :{get:  function()  { return browser.element('.dropdown-toggle');}},
    Logout_button :{get:  function()  { return  browser.element('#signOutID');}},
    error:   {get:   function() {return browser.element('.signup-error');}},
    open: { value: function()  { page.open.call(this, 'login'); } },
    LoginButton_signupFlow: {get: function(){return browser.element('#js-signin');}},
    login_signupFlow : {get: function() {return browser.element('#nav-sign-up');}},
    loggedout_Verify: {get: function() {return browser.element('.learnyst-login-content');}},
    // loggedout_Verify: {get: function() {return browser.element('.js-skipLogin');}},
 });

module.exports = Logout;