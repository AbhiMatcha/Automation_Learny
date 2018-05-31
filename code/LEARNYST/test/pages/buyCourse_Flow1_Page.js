'use strict';
var page=require('./page');
var buycourseFlow1com = require('../Components/buyCourse_Flow1_Com');
var buycourseFlow1Page=Object.create(page,{
  buycourseFlow1com: {get: function() {return buycourseFlow1com;} }
});  
module.exports = buycourseFlow1Page;