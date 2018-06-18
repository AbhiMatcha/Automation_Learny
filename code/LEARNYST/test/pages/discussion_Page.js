var page=require('./page');
var discussion = require('../Components/discussion_Com');
var discussion_page=Object.create(page,{
  discussion: {get: function() {return discussion;} }
});  
module.exports = discussion_page;