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

	signupSpec(global.forenroll.Random_email.value(),global.forenroll.password);

    // saveNumber(global.TestData.CONTACT,global.forenroll.Random_email.value(),global.forenroll.password);

    // browser.back();

    // logoutSpec(global.sup.username,global.sup.password);

    // loginSpec(global.sup.username,global.sup.password);
    
    // logoutSpec(global.sup.username,global.sup.password);
    
   
});
/* 
 Buy course
*/



