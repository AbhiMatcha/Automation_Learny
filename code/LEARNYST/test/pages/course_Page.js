'use strict';
var page=require('./page');
var course = require('../Components/course_Com');
var coursePage=Object.create(page,{
  course: {get: function() {return course;} }
});  
module.exports = coursePage;