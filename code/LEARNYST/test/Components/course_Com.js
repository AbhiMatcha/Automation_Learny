'use strict';

var component=require('./component'); 

var course = Object.create(component, {
    selectCourse : {get: function(){ return element.all(by.xpath('//*[text()="My First Course"]'));}},
    // selectCourse:{ 
    //   title: null,
    //   get:  function()  { return browser.element('span[data-content="'+title+'"]');},

    //   set: function(i) {  title = i ;}  
    // },
   
    courseImg:{get:function(){ return browser.element('#course-list li img');}},
    courseTitle:{get:function(){ return browser.element('#course-list li span[class="prox"]');}},
    price: { get: function() { return browser.elements('.course-price span'); }},
    paySecurely: { get: function() { return browser.elements('#js-paynow'); }},
    buyNow: { get: function() { return browser.element('.buyCourse'); }},
    paySecurely: { get: function() { return browser.elements('#contact'); }},
    payNow: { get: function() { return browser.elements('.otp-btn'); }},
    paymentSuccess: { get: function() { return browser.elements('.success'); }},
});
module.exports = course;