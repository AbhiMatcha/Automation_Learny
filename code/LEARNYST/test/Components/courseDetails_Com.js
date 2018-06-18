'use strict';

var component=require('./component'); 

var courseDetails = Object.create(component, {
    
    coursePrice:{get: function() { return browser.element('.course-price-val'); }},
    buyNow:{get: function() { return browser.element('.buyCourse'); }},
    paySecurely:{get: function() { return browser.element('#js-paynow'); }},
    enterContact:{get: function() { return browser.element('#contact'); }},
    selectPaymentType:{get: function() { return browser.element('[tab="netbanking"]');}},
    selectSBI:{get:function(){return browser.element('#bank-radio-ICIC');}},
    selectICICI:{get:function(){return browser.element('#bank-radio-SBIN');}},
    payNow:{get: function() { return browser.element('.pay-btn'); }},
    paymentSuccess:{get: function() { return browser.element('.success'); }},
    paymentFailure:{get: function() { return browser.element('.danger'); }},
    startCourse:{get: function() { return browser.element('.gotoPaidCourse'); }},
    VerifyPurchase:{ get: function() { return browser.element('.course-purchased');}},
});
module.exports = courseDetails;