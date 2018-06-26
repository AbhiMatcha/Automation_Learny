'use strict';
/* 
Suite for classroom (automation)
*/
var loginSpec = require('./login_Spec');
// var logoutSpec = require('./logout_Spec');
// var signupSpec = require('./signup_Spec');
// var saveNumber = require('./profile_Spec');
var global = require('./Global_data');
/* 
check Login, Logout, Signup module
*/
describe(" -- Testing signup Page -- ", function() {

	// signupSpec(global.forenroll.Random_email.value(),global.forenroll.password);
	// global.TestData.pause();3
    // saveNumber(global.TestData.CONTACT);
    // // global.TestData.pause();
    // browser.back();
    // global.TestData.pause();
    // logoutSpec();
    // global.TestData.pause();
    loginSpec(global.sup.username,global.sup.password);
    // global.TestData.pause();
    // logoutSpec(global.sup.username,global.sup.password);
});
/* 
 Buy course
*/



