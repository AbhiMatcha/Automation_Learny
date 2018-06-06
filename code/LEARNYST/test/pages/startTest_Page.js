'use strict';
var page=require('./page');
var startFreeTest = require('../Components/startTest_Com');
var startFreeTestPage=Object.create(page,{
  startFreeTest: {get: function() {return startFreeTest;} }
});  
module.exports = startFreeTestPage;