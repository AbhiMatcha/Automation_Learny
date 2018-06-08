var component=require('./component'); 
var page = require('../pages/page');

var support = Object.create(component, {
    open: { value: function()  { page.open.call(this, 'learn/Learn'); } },
    supportTab:{get: function() { return browser.element('#nav-support');}}, 
    subject: {get: function() { return browser.element('#title');}},
    description: {get: function() { return browser.element('#description');}},
    checkbox: {get: function() { return browser.element('#viewedhelp');}},
    submitTicket: {get: function() { return browser.element('#submit-ticket');}},
    submitConfirmation: {get: function() { return browser.element('.swal2-confirm');}}
});
module.exports = support;