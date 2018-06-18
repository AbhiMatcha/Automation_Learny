'use strict';
var page=require('./page');
var Logout = require('../Components/logout_Com');
var LogoutPage=Object.create(page,{
  Logout: {get: function() {return Logout;} }
});  
module.exports = LogoutPage;