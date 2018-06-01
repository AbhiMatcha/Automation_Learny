var page=require('./page');
var startcourse = require('../Components/startCourse_Com');

var startCoursePage=Object.create(page,{
  startcourse: {get: function() {return startcourse;} }
});  

module.exports = startCoursePage;