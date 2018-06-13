var notes_page = require('../pages/notes_Page');
//var startCourse_Com = require('../Components/startCourse_Com');
var global = require('./Global_data');
var timerCallback;
	/* 
Calling the login function from Login_spec,
Scenario: User should be logged-in through sign-up flow.      
*/
describe(" -- Testing free test Page -- ", function() {
  notesFunction(global.forenroll.Random_email.value(),global.forenroll.password,global.notes.fisrtNote,global.notes.editedNote);
  });

function notesFunction(username,password,notes,editedNotes){

	beforeEach(function() {
	  timerCallback = jasmine.createSpy("timerCallback");
 	  jasmine.clock().install();
 	  setTimeout(function() {
 	  timerCallback();
    },);
  }); 

	beforeAll(function(){
	  browser.windowHandleFullscreen();
 	  notes_page.notes.open('learn/Learn?'); 
 	  notes_page.notes.enrollFree.click();
	  notes_page.notes.Signup_forNotes.waitForExist(5000);
	  notes_page.notes.Signup_forNotes.click();
	  notes_page.notes.Signup_Email.waitForExist(5000);
	  notes_page.notes.Signup_Email.setValue(username);
	  notes_page.notes.Signup_Password.setValue(password);
	  notes_page.notes.do_Signup.waitForExist(5000);
	  notes_page.notes.do_Signup.click();
	  notes_page.notes.notesTab.waitForExist(5000);
	  notes_page.notes.notesTab.click();
	  notes_page.notes.createNotes.waitForExist(5000);
	  notes_page.notes.createNotes.click();
	  notes_page.notes.enterNote.waitForExist(5000);
	  notes_page.notes.enterNote.setValue(notes);
	  notes_page.notes.submitnote.waitForExist(5000);
	  notes_page.notes.submitnote.click();
	  notes_page.notes.editNote.waitForExist(5000);
	  notes_page.notes.editNote.click();
	  notes_page.notes.enterNote.waitForExist(5000);
	  browser.elementIdClear(notes_page.notes.enterNote);
	  notes_page.notes.enterNote.setValue(editedNotes);
	  notes_page.notes.submitnote.click();
	  
});
	it('-----> should be complete test-in by user',function() {
	  expect('.notesText').to.have.text('HI this is my second notes');
	});


 
}

module.exports= notesFunction;