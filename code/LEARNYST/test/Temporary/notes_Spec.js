var notes_page = require('../pages/notes_Page');
var buyCourse_com = require('../Components/buyCourse_Com');
var signup_com = require('../Components/signup_Com');
var global = require('./Global_data');
var timerCallback;
	/* 
Calling the login function from Login_spec,
Scenario: User should be logged-in through sign-up flow.      
*/
describe(" -- Testing free test Page -- ", function() {
  notesFunction(global.forenroll.Random_email.value(),global.forenroll.password,global.notes.fisrtNote,global.notes.editedNote);
  });

function notesFunction(username,password,note,editedNote){
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
 	  buyCourse_com.enrollFree.waitForExist(5000);
  	  buyCourse_com.enrollFree.click();
  	  /*Taking elements from signup components*/
	  signup_com.signup_coursePage.waitForExist(5000);
	  signup_com.signup_coursePage.click();
	  signup_com.signupEmail_coursePage.waitForExist(5000);
	  signup_com.signupEmail_coursePage.setValue(username);
	  signup_com.signupPassword_coursePage.waitForExist(5000);
	  signup_com.signupPassword_coursePage.setValue(password);
	  signup_com.signupForFree_coursePage.waitForExist(5000);
	  signup_com.signupForFree_coursePage.click();
	  /* Taking elements from notes components*/
	  notes_page.notes.notesTab.waitForExist(5000);
	  notes_page.notes.notesTab.click();
	  notes_page.notes.createNotes.waitForExist(5000);
	  notes_page.notes.createNotes.click();
	  notes_page.notes.enterNote.waitForExist(5000);
	  notes_page.notes.enterNote.setValue(note);
	  notes_page.notes.submitnote.waitForExist(5000);
	  notes_page.notes.submitnote.click();
	  notes_page.notes.editNote.waitForExist(5000);
	  notes_page.notes.editNote.click();
	  notes_page.notes.enterNote.waitForExist(5000);
	  browser.elementIdClear(notes_page.notes.enterNote);
	  notes_page.notes.enterNote.setValue(editedNote);
	  notes_page.notes.submitnote.click();
	  notes_page.notes.deleteNote.waitForExist(5000);
});
	it('-----> should be complete test-in by user',function() {
	  
	    expect(notes_page.notes.deleteNote.isVisible()).toBe(true);
	});
}

module.exports= notesFunction;