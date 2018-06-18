'use strict';

var component=require('./component'); 
var page = require('../pages/page');
var Login = Object.create(page,{
   login_email :{get:  function()  { return browser.element('#lernystLogin_new_user_user_email');}},
   login_Password :{get:  function()  { return  browser.element('#lernystLogin_new_user_user_password');}},
   form:    {get:   function() { return browser.submit('#input-form');}},
   error:   {get:   function() {return browser.element('.signup-error');}},
   open: { value: function()  { page.open.call(this, 'login'); } },
   login_button: { get: function() { return browser.element('#lr_login_btn'); } }, 
   verifyLogin: { get: function() { return browser.element('#js-welcomeUser'); } }, 
 });

module.exports = Login;