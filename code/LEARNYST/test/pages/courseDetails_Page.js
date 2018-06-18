'use strict';
var page=require('./page');
var courseDetails = require('../Components/courseDetails_Com');
var courseDetailsPage=Object.create(page,{
  courseDetails: {get: function() {return course;} }
});  
module.exports = courseDetailsPage;