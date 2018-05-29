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

loginSpec();
logoutSpec();
signupSpec();