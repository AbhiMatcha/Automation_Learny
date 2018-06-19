var component=require('./component'); 
var page = require('../pages/page');
var discussion = Object.create(component, {
    open: { value: function()  { page.open.call(this, 'learn/Learn'); } },
    discussiontab:{get: function() { return browser.element('a[href="#discussionTab"]');}}, 
    ask:{ get: function() { return browser.element('#askQ'); }},
    enterQuestion:{ get: function() { return browser.element('#postQuestionInput'); }},
    postQuestion:{ get: function() { return browser.element('#addPostQuestion'); }},
    editQuestion:{ get: function() { return browser.element('.pull-right.js-editDs.editNote.margin-left-8'); }},
    deleteQuestion:{ get: function() { return browser.element('#removeDs_39648'); }}, 
    getQuestion:{ get: function() { return browser.getText('#ds-question_39648'); }},
    confirmDelete:{ get: function() { return browser.getText('.swal2-confirm'); }},
});
module.exports = discussion;
