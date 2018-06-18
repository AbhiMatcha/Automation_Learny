var component=require('./component'); 
var page = require('../pages/page');

var notes = Object.create(component, {
    open: { value: function()  { page.open.call(this, 'learn/Learn'); } },
    notesTab:{get: function() { return browser.element('a[href="#notesTab"]');}}, 
    enrollFree:{ get: function() { return browser.element('.buy-btns-align');}}, 
    Signup_forNotes: { get: function() {return browser.element('[data-link="signup"]');}},
    Signup_Email: { get: function() { return browser.element('#signup-email');}},
    Signup_Password: { get: function() { return browser.element('#signup-password');}},
    do_Signup: { get: function() { return browser.element('#js-signup'); }},
    createNotes:{ get: function() { return browser.element('#createNote'); }},
    enterNote:{ get: function() { return browser.element('#postQuestionInput'); }},
    submitnote:{ get: function() { return browser.element('#addPostQuestion'); }},
    editNote:{ get: function() { return browser.element('.editNote'); }},
    deleteNote:{ get: function() { return browser.element('.pull-left.js-removeNote.removeNote'); }}, 
});
module.exports = notes;