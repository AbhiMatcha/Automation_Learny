'use strict';

var component=require('./component'); 

var profile = Object.create(component, {
    selectProfile:{get:  function()  { return browser.element('.dropdown-toggle');}},
    refresh: {get:  function()  { return browser.element('#js-refresh');}},
    settings: {get:  function()  { return browser.element('#settings');}},
    signout: {get:  function()  { return browser.element('#signOutID');}},
    open: { value: function()  { page.open.call(this, 'signup');}},
    mobileNumber: {get:  function()  { return browser.element('#mobileNumber');}}, 
    saveSettings: {get:  function()  { return browser.element('#js-setting-submit');}}, 
    VerifyNumberSaved: { get: function() { return browser.element('.alert-success');}},
   
});
module.exports = profile;




    