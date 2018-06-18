'use strict';

var component=require('./component'); 
var page = require('../pages/page');
var Logout = Object.create(page,{
    //User_Profile :{get:  function()  { return browser.element('#userProfileDiv');}},
    error:   {get:   function() {return browser.element('.signup-error');}},
    open: { value: function()  { page.open.call(this, 'learn'); } },
    login: {get:   function() {return browser.element('#js-signin');}},
    login_signupFlow : {get: function() {return browser.element('#nav-sign-up');}},
    loggedout_Verify: {get: function() {return browser.element('.js-skipLogin');}},
 });

module.exports = Logout;

