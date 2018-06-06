var page=require('./page');
var notes = require('../Components/notes_Com');
var notes_page=Object.create(page,{
  notes: {get: function() {return notes;} }
});  
module.exports = notes_page;