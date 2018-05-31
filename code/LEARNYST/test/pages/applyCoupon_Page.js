'use strict';
var page=require('./page');
var applycoupon = require('../Components/applyCoupon_Com');
var applycouponPage=Object.create(page,{
  applycoupon: {get: function() {return course;} }
});  
module.exports = applycouponPage;