'use strict';

var loginSpec = require('./login_Spec');
var logoutSpec = require('./logout_Spec');
var signupSpec = require('./signup_Spec');

/* 
Run all the functions and complete test sceanrio,
Scenario: 1. Run signup fucntion
		  2. Run Logout function
		  3. Run Login Function
*/
describe(" -- Testing signup Page -- ", function() {
 it('-----> user should be signed-up by user',function() {
     signupSpec();
   });
});

describe(" -- Testing login Page -- ", function() {
 it('-----> user should be logged-in by user',function() {
     loginSpec();
   });
});

describe(" -- Testing logout Page -- ", function() {
 it('-----> user should be logged-out by user',function() {
     logoutSpec();
   });
});



