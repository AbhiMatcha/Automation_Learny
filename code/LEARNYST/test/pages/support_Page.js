var page=require('./page');
var support = require('../Components/support_Com');
var support_page=Object.create(page,{
  support: {get: function() {return support;} }
});  
module.exports = support_page;