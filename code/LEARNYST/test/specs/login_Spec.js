'use strict';
var LoginPage = require('../pages/login_Page');
var global = require('./Global_data');
var timerCallback;
	/* 
Calling the login function from Login_spec,
Scenario: User should be logged-in through sign-up flow.      
*/
describe(" -- Testing Login Page -- ", function() {
  login(global.sup.username,global.sup.password);
  });

function login(userName,pass){	
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
  LoginPage.Login.open('login');
  // browser.url('http://learnnew.learnyst.com/learn/My-First-Course?');
  browser.setViewportSize({
    width: 1700,
    height: 1080
  });60
});

it('-----> should be logged-in by user',function() {
	   LoginPage.Login.login_email.setValue(userName);
     LoginPage.Login.login_Password.setValue(pass);    
	   LoginPage.Login.login_button.click();
     console.log('Login success');
	});
 
}

module.exports= login;