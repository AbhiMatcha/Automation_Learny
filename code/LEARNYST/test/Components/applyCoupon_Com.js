'use strict';

var component=require('./component'); 

var applycoupon = Object.create(component, {
    // selectCourse : {get: function(){ return element.all(by.xpath('//*[text()="My First Course"]'));}},
    enterCoupon:{get: function() { return browser.element('#coupon-input'); }},
    applyCoupon: { get: function() { return browser.elements('#js-apply-coupon'); }},
});
module.exports = applycoupon;