var component=require('./component'); 
var page = require('../pages/page');
var startcourse1 = Object.create(component, {
    open: { value: function()  { page.open.call(this, 'learn/Course-for-Automation?'); } },
    syllabusTab:{get: function() { return browser.element('a[href="#syllabusTab"]');}}, 
    correctAnswer1Test1:{ get: function() { return browser.element('[for="shipadd5545112"]');}},
    wrongAnswer1Test1:{ get: function() { return browser.element('[for="shipadd5545113"]');}},
    correctAnswer2Test1:{ get: function() { return browser.element('[for="shipadd5545296"]');}},
    wrongAnswer2Test1:{ get: function() { return browser.element('[for="shipadd5545293"]');}},
    answerTest2:{ get: function() { return browser.elemenst('#answer');}},
    certificateTab:{get: function() { return browser.element('a[href="#certificateTab"]');}},
    downloadCertificate: {get: function() { return browser.element('#certificateBtn');}},
});
module.exports = startcourse1;