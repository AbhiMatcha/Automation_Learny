var component=require('./component'); 
var page = require('../pages/page');

var discussion = Object.create(component, {
    open: { value: function()  { page.open.call(this, 'learn/Learn'); } },
    discussiontab:{get: function() { return browser.element('a[href="#discussionTab"]');}}, 
	// discussiontab:{get: function() { return browser.element('[aria-controls="discussionTab"]');}},
    enrollFree:{ get: function() { return browser.element('.buy-btns-align');}}, 
    Signup_StartCourse: { get: function() {return browser.element('[data-link="signup"]');}},
    SignupEmail: { get: function() { return browser.element('#signup-email');}},
    SignupPassword: { get: function() { return browser.element('#signup-password');}},
    doSignup: { get: function() { return browser.element('#js-signup'); }},
    ask:{ get: function() { return browser.element('#askQ'); }},
    enterQuestion:{ get: function() { return browser.element('#postQuestionInput'); }},
});
module.exports = discussion;


