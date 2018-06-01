'use strict';

var component=require('./component'); 

var buycourseFlow1com = Object.create(component, {
	signUp:{ get:  function()  { return browser.element('[data-link="signup"]');}},
	SignupEmail :{get:  function()  { return browser.element('#signup-email');}},
	open: { value: function()  { page.open.call(this, 'learn/My-First-Course'); } },
	SignupPassword: {get:  function()  { return browser.element('#signup-password');}},
	SignupforFree: {get:  function()  { return browser.element('#js-signup');}},
});
module.exports = buycourseFlow1com;