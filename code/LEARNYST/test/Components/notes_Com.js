var component=require('./component'); 
var page = require('../pages/page');

var notes = Object.create(component, {
    open: { value: function()  { page.open.call(this, 'learn/Learn'); } },
    notesTab:{get: function() { return browser.element('a[href="#notesTab"]');}}, 
    createNotes:{ get: function() { return browser.element('#createNote'); }},
    enterNote:{ get: function() { return browser.element('#postQuestionInput'); }},
    submitnote:{ get: function() { return browser.element('#addPostQuestion'); }},
    editNote:{ get: function() { return browser.element('.editNote'); }},
    deleteNote:{ get: function() { return browser.element('.pull-left.js-removeNote.removeNote'); }}, 
});
module.exports = notes;