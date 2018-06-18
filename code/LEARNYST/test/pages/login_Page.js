'use strict';
var page=require('./page');
var Login = require('../Components/login_Com');
var LoginPage=Object.create(page,{
  Login: {get: function() {return Login;} }
});  
module.exports = LoginPage;