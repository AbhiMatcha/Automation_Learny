var component=require('./component'); 
var page = require('../pages/page');
var startcourse = Object.create(component, {
    Login_Startcourse: { get: function() { return browser.element('#nav-sign-up');}},    
    Signup_StartCourse: { get: function() {return browser.element('[data-link="signup"]');}},
    SignupEmail: { get: function() { return browser.element('#signup-email');}},
    SignupPassword: { get: function() { return browser.element('#signup-password');}},
    doSignup: { get: function() { return browser.element('#js-signup'); }},
    open: { value: function()  { page.open.call(this, 'learn/Course-for-Automation?'); } },
    enrollFree:{ get: function() { return browser.element('.enrollCourse'); }},
    syllabusTab:{get: function() { return browser.element('a[href="#syllabusTab"]');}}, 
    resumeButton:{ get: function() { return browser.element('.js-resume');}},
    takeTest:{ get: function() { return browser.element('.js-takeTest');}},  
    startTest:{ get: function() { return browser.element('.js-startTest');}}, 
    correctAnswer1Test1:{ get: function() { return browser.element('[for="shipadd5545112"]');}},
    wrongAnswer1Test1:{ get: function() { return browser.element('[for="shipadd5545113"]');}},
    correctAnswer2Test1:{ get: function() { return browser.element('[for="shipadd5545296"]');}},
    wrongAnswer2Test1:{ get: function() { return browser.element('[for="shipadd5545293"]');}},
    answerTest2:{ get: function() { return browser.element('#answer');}},
    save:{ get: function() { return browser.element('.js_nextQuestn');}},
    next:{ get: function() { return browser.element('.js-practice-next');}},
    submit:{ get: function() { return browser.element('.swal2-confirm');}},
    retakeTest:{ get: function() { return browser.element('#js-revise');}},
    // correctAnswer1Test2:
    // correctAnswer2Test2:
});
module.exports = startcourse;