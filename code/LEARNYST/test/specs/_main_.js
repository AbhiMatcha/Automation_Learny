'use strict';
/* 
Suite for classroom (automation)
*/
// var loginSpec = require('./login_Spec');
// var logoutSpec = require('./logout_Spec');
var signup = require('./signup_Spec');
// var saveNumber = require('./profile_Spec');
var global = require('../Temporary/Global_data');
/* 
check Login, Logout, Sinup module
*/
// beforeEach(function() {
//       timerCallback = jasmine.createSpy("timerCallback");
//       jasmine.clock().install();
//       setTimeout(function() {
//           timerCallback();
//         },60);
//     });

describe(" -- Testing signup Page : main -- ", function() {
   
	signup(SignupPage.Signup.Random_email(),SignupPage.Signup.Enter_Password);

});

it('-----> should be signed-in by user : main',function() {
  expect(SignupPage.Signup.Signup_forFree.isVisible()).toBe(true);
//       expect(SignupPage.Signup.Signup_forFree.isVisible()).toBe(true);
//   // expect(LoginPage.Login.login_button.isVisible()).toBe(true); 
  });
// global.TestData.pause();
// describe(" -- Testing signup Page -- ", function() {
//     beforeEach(function() {
//       timerCallback = jasmine.createSpy("timerCallback");
//       jasmine.clock().install();
//       setTimeout(function() {
//           timerCallback();
//         },60);
//     }); 
//     saveNumber(global.TestData.CONTACT);
//     browser.back();
// });
// it('-----> should be signed-in by user',function() {
//   // expect(true).toBe(true);
//     expect(profilePage.profile.VerifyNumberSaved.isVisible()).toBe(true);
//       // expect(LoginPage.Login.verifyLogin.isVisible()).toBe(true);
//       // expect(LoginPage.Login.login_button.isVisible()).toBe(true); 
//   });
// global.TestData.pause();
//     global.TestData.pause();
//   describe(" -- Testing signup Page -- ", function() {
//         logoutSpec();
//     });
//     it('-----> should be signed-in by user',function() {
//       expect(true).toBe(true);
//       // expect(LoginPage.Login.verifyLogin.isVisible()).toBe(true);
//       // expect(LoginPage.Login.login_button.isVisible()).toBe(true); 
//   });
//     global.TestData.pause();
//     describe(" -- Testing signup Page -- ", function() {
//         loginSpec(global.sup.username,global.sup.password);
//     });
//     // global.TestData.pause();
//     // logoutSpec(global.sup.username,global.sup.password);
//     it('-----> should be signed-in by user',function() {
//       expect(true).toBe(true);
//       // expect(LoginPage.Login.verifyLogin.isVisible()).toBe(true);
//       // expect(LoginPage.Login.login_button.isVisible()).toBe(true); 
//   });
// /* 
//  Buy course
//  */