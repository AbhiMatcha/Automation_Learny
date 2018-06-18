var page=require('./page');
var startcourse1 = require('../Components/startCourse_Com');

var startCoursePage1=Object.create(page,{
  startcourse1: {get: function() {return startcourse1;} }
});  

module.exports = startCoursePage1;