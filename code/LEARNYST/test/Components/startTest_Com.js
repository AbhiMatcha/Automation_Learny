var component=require('./component'); 
var page = require('../pages/page');

var startFreeTest = Object.create(component, {
    open: { value: function()  { page.open.call(this, 'learn/Learn'); } },
    selectTest:{ get: function() { return browser.element('#20763');}},
    takeTest: { get: function() { return browser.element('.js-takeTest');}},
    startTest:{ get: function() { return browser.element('.js-startTest');}},
    resumeButton:{ get: function() { return browser.element('.js-resume');}},
    correctAnswer:{get: function() { return browser.element('[for="shipadd4974910"]');}},
    wrongAnswer: {get: function() { return browser.element('[for="shipadd4974911"]');}},
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


