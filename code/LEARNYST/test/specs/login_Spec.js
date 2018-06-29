'use strict';
var LoginPage = require('../pages/login_Page');
var timerCallback;
var global = require('../Temporary/Global_data');
	/* 
Calling the login function from Login_spec,
Scenario: User should be logged-in.      
*/

describe(" -- Testing Login Page -- ", function() {
  login(global.sup.username,global.sup.password);
  });

function login(userName,pass){	
  // describe(" -- Testing Login Page -- ", function() {
    
  beforeEach(function() {
    timerCallback = jasmine.createSpy("timerCallback");
    jasmine.clock().install();
    setTimeout(function() {
      timerCallback();
    },  60);
  });

    beforeAll(function(){
      LoginPage.Login.open('login');
      // browser.url('http://learnnew.learnyst.com/learn/My-First-Course?');
      browser.windowHandleFullscreen();
      LoginPage.Login.login_email.waitForExist(5000);
      LoginPage.Login.login_email.setValue(userName);
      LoginPage.Login.login_Password.waitForExist(5000);
      LoginPage.Login.login_Password.setValue(pass);  
      LoginPage.Login.login_button.waitForExist(5000);  
      LoginPage.Login.login_button.click();
      // process.end();
      // LoginPage.Login.verifyLogin.waitForExist(8000);
    });
    // afterAll(function(){
    //   // browser.close();
    // // });
    it('-----> should be logged-in by user',function() {
      // expect(true).toBe(true);
      expect(LoginPage.Login.login_button.isVisible()).toBe(true);
      // expect(LoginPage.Login.login_button.isVisible()).toBe(true); 
    });
  // });
}
module.exports= login;