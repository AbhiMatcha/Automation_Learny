'use strict';
var page=require('./page');
var profile = require('../Components/profile_Com');
var profilePage=Object.create(page,{
  profile: {get: function() {return profile;} }
});  
module.exports = profilePage;