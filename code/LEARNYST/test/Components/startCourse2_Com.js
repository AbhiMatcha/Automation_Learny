var component=require('./component'); 
var page = require('../pages/page');
var startcourse2 = Object.create(component, {
    open: { value: function()  { page.open.call(this, 'learn/Fill-in-the-blanks?'); } },
    syllabusTab:{get: function() { return browser.element('a[href="#syllabusTab"]');}}, 
    answerTest:{ get: function() { return browser.elemenst('#answer');}},
    submit:{ get: function() { return browser.element('.swal2-confirm');}},
    certificateTab:{get: function() { return browser.element('a[href="#certificateTab"]');}},
    downloadCertificate: {get: function() { return browser.element('#certificateBtn');}},

});
module.exports = startcourse2;