var support_page = require('../pages/support_Page');
//var startCourse_Com = require('../Components/startCourse_Com');
var global = require('./Global_data');
var timerCallback;
	/* 
Calling the login function from Login_spec,
Scenario: User should be logged-in through sign-up flow.      
*/
describe(" -- Testing free test Page -- ", function() {
  suportFunction(global.forenroll.Random_email.value(),global.forenroll.password);
  });

function suportFunction(username,password){

	beforeEach(function() {
	  timerCallback = jasmine.createSpy("timerCallback");
 	  jasmine.clock().install();
 	  setTimeout(function() {
 	  timerCallback();
    },60);
  }); 

	afterAll(function() {
	  browser.close()
 	 });

	beforeAll(function(){
 		 browser.windowHandleFullscreen();
  	 	 notes_page.notes.open('learn/Learn?'); 
});

it('-----> should be complete test-in by user',function() {
	  support_page.support.enrollFree.click();
	  support_page.notes.Signup_forNotes.waitForExist(5000);
	  support_page.notes.Signup_forNotes.click();
	  support_page.notes.Signup_Email.waitForExist(5000);
	  support_page.notes.Signup_Email.setValue(username);
	  support_page.notes.Signup_Password.setValue(password);
	  support_page.notes.do_Signup.waitForExist(5000);
	  support_page.notes.do_Signup.click();
	  support_page.notes.notesTab.waitForExist(6000);
	  support_page.notes.notesTab.click();
	  support_page.notes.createNotes.click();
	  support_page.notes.enterNote.setValue("HI this is my first notes");
	  support_page.notes.submitnote.click();
	  support_page.notes.editNote.click();
	  browser.clearElement(notes_page.notes.enterNote);
	  notes_page.notes.enterNote.setValue("HI this is my second notes");
	  notes_page.notes.submitnote.click();
	  expect('.notesText').to.have.text('HI this is my second notes');

	});
 
}

module.exports= suportFunction;