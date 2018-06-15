var page=require('./page');
var startcourse2 = require('../Components/startCourse2_Com');

var startCoursePage2=Object.create(page,{
  startcourse2: {get: function() {return startcourse2;} }
});  

module.exports = startCoursePage2;