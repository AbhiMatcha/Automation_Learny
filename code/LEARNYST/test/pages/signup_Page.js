'use strict';
var page=require('./page');
var Signup = require('../Components/signup_Com');
var SignupPage=Object.create(page,{
  Signup: {get: function() {return Signup;} }
});  
module.exports = SignupPage;