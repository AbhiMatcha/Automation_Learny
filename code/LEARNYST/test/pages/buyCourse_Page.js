'use strict';
var page=require('./page');
var buycourse = require('../Components/buyCourse_Com');
var buycoursePage=Object.create(page,{
  buycourse: {get: function() {return course;} }
});  
module.exports = buycoursePage;