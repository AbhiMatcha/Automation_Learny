var component=require('./component'); 
var page = require('../pages/page');

var startFreeTest = Object.create(component, {
    Login_StartTest: { get: function() { return browser.element('#nav-sign-up');}},
    Signup_StartTest: { get: function() {return browser.element('[data-link="signup"]');}},
    SignupEmail: { get: function() { return browser.element('#signup-email');}},
    SignupPassword: { get: function() { return browser.element('#signup-password');}},
    doSignup: { get: function() { return browser.element('#js-signup'); }},
    open: { value: function()  { page.open.call(this, 'learn/Learn'); } },
    selectTest:{ get: function() { return browser.element('#20763');}},
    enrollFreeTest: { get: function() { return browser.element('.buy-btns-align');}},
    takeTest: { get: function() { return browser.element('.js-takeTest');}},
    startTest:{ get: function() { return browser.element('.js-startTest');}},
    correctAnswer:{get: function() { return browser.element('[for="shipadd4974910"]');}},
    wrongAnswer: {get: function() { return browser.element('[for="shipadd4974911"]');}},
   // wrongAnswer: {get: function() { return browser.element('#shipadd4974911');}}, 
    saveAnswer:{get: function() { return browser.element('.js_nextQuestn');}},
    nextQuestion:{get: function() { return browser.element('.js-practice-next');}},
    submitTest:{get: function() { return browser.element('.swal2-confirm');}},
    retakeTest:{get: function() { return browser.element('#js-revise');}},
    solutions:{get: function() { return browser.element('#js-viewAns');}},
    congratsMessage:{get: function() { return browser.getText('.correct-font-color');}},
    explanation:{get: function() { return browser.getText('#quizExplanId');}},
    // explanation:{get: function() { return browser.element('#quizExplanId');}},
    nextAnswer:{get: function() { return browser.element('#nextAnswer');}},
    lastQuestionPopup:{get: function() { return browser.element('.swal2-confirm');}},  
});
module.exports = startFreeTest;


