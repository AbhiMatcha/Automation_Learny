'use strict';
/* 
Suite for classroom (automation)
*/
var loginSpec = require('./login_Spec');
var logoutSpec = require('./logout_Spec');
var signupSpec = require('./signup_Spec');
var saveNumber = require('./profile_Spec');
var global = require('./Global_data');
/* 
check Login, Logout, Signup module
*/
describe(" -- Testing signup Page -- ", function() {
    // describe("--- Testing signup ---", function(){
	signupSpec(global.forenroll.Random_email.value(),global.forenroll.password);
    global.TestData.pause();
    // });
    // describe("--- Testing save number ---", function(){
    saveNumber(global.TestData.CONTACT,global.forenroll.Random_email.value(),global.forenroll.password);
    global.TestData.pause();
    browser.back();
    // });
    // describe("--- Testing logout ---", function(){
    logoutSpec(global.sup.username,global.sup.password);
    global.TestData.pause();
    // });
    // describe("--- Testing login ---", function(){
    loginSpec(global.sup.username,global.sup.password);
    global.TestData.pause();
    // });
    // describe("--- Testing again logout ---", function(){
    logoutSpec(global.sup.username,global.sup.password);
    global.TestData.pause();
    // browser.close();
    // });
});
/* 
 Buy course
*/



