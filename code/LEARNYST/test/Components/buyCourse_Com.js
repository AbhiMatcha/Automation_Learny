'use strict';
var component=require('./component'); 
var buycourse = Object.create(component, {
    selectCourse:{get:  function()  { return browser.element('#20744');}},
    open: { value: function()  { page.open.call(this, 'learn/My-First-Course?');}},
    submit: { value: function() { this.form.submitForm(); } },
    enrollFree:{ get: function() { return browser.element('.buy-btns-align');}}, 
    buyNow:{get: function() { return browser.element('.buyCourse'); }},
    paySecurely:{get: function() { return browser.element('#js-paynow'); }},
    selectPaymentType:{get: function() { return browser.element('[tab="netbanking"]');}},
    selectBank:{get:function(){return browser.element('#bank-select');}},
    paymentGatewayPage: {get:function(){return browser.element('#form-common');}},
    payNow:{get: function() { return browser.element('.otp-btn'); }},
    paymentSuccess:{get: function() { return browser.element('.success'); }},
    paymentFailure:{get: function() { return browser.element('.danger'); }},
});
module.exports = buycourse;