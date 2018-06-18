var downloadCertificatePage = require('../pages/downloadCertificate_Page');
var global=require('./Global_data');
var timerCallback;
/* 
using the signup flow to complete payment.
Scenario: 
1.User should be signup.
2.User should be able to see the confirm mail alert.
*/
describe(" -- Testing signup Page -- ", function() {
	downLoadCertificate(global.forenroll.Random_email.value(),global.forenroll.password,global.TestData.CONTACT,global.TestAnswers.randomAnswers.value(),global.TestAnswers.randomAnswers.value());
});	

function downLoadCertificate(username,password,contact,answer1,answer2)
{	
	beforeEach(function() {
		timerCallback = jasmine.createSpy("timerCallback");
		jasmine.clock().install();
		setTimeout(function() {
			timerCallback();
		},  60);
	});

	beforeAll(function(){
		// downloadCertificatePage.open('learn/Course-for-Automation');
		browser.windowHandleFullscreen();
		browser.url('http://learnnew.learnyst.com/learn/Course-for-Automation');		
		downloadCertificatePage.DownloadCertificate.enrollFree.waitForExist(5000);
		downloadCertificatePage.DownloadCertificate.enrollFree.click();
		downloadCertificatePage.DownloadCertificate.Signup_downloadCer.waitForExist(5000);
		downloadCertificatePage.DownloadCertificate.Signup_downloadCer.click();
		downloadCertificatePage.DownloadCertificate.SignupEmail.waitForExist(5000);
		downloadCertificatePage.DownloadCertificate.SignupEmail.setValue(username);
		downloadCertificatePage.DownloadCertificate.SignupPassword.setValue(password);
		downloadCertificatePage.DownloadCertificate.doSignup.waitForExist(5000);
		downloadCertificatePage.DownloadCertificate.doSignup.click();
		downloadCertificatePage.DownloadCertificate.resumeButton.waitForExist(5000);
		downloadCertificatePage.DownloadCertificate.resumeButton.click();
		downloadCertificatePage.DownloadCertificate.takeTest.waitForExist(5000);
		downloadCertificatePage.DownloadCertificate.takeTest.click();
		global.TestData.shortPause();
		downloadCertificatePage.DownloadCertificate.startTest.waitForExist(5000);
		downloadCertificatePage.DownloadCertificate.startTest.click();
		downloadCertificatePage.DownloadCertificate.correctAnswer1Test1.waitForExist(5000);
		downloadCertificatePage.DownloadCertificate.correctAnswer1Test1.click();
		downloadCertificatePage.DownloadCertificate.save.waitForExist(5000);
		downloadCertificatePage.DownloadCertificate.save.click();
		downloadCertificatePage.DownloadCertificate.next.waitForExist(5000);
		downloadCertificatePage.DownloadCertificate.next.click();
		downloadCertificatePage.DownloadCertificate.correctAnswer2Test1.waitForExist(5000);
		downloadCertificatePage.DownloadCertificate.correctAnswer2Test1.click();
		downloadCertificatePage.DownloadCertificate.save.waitForExist(5000);
		downloadCertificatePage.DownloadCertificate.save.click();
		downloadCertificatePage.DownloadCertificate.next.waitForExist(5000);
		downloadCertificatePage.DownloadCertificate.next.click();
		downloadCertificatePage.DownloadCertificate.submit.waitForExist(5000);
		downloadCertificatePage.DownloadCertificate.submit.click();
		global.TestData.shortPause();
		browser.back();
		browser.back();
		downloadCertificatePage.DownloadCertificate.certificateTab.waitForExist(5000);
		downloadCertificatePage.DownloadCertificate.certificateTab.click();
		downloadCertificatePage.DownloadCertificate.downloadCertificate.waitForExist(5000);
		downloadCertificatePage.DownloadCertificate.downloadCertificate.click();
		
		
		
		
	}); 

	it('-----> start course',function() 
	{   
		
		expect(downloadCertificatePage.DownloadCertificate.submit.isVisible()).toBe(true);
		console.log('Test case passed : User successfully signed-up and confirm alert is displayed');
	});
}

module.exports=downLoadCertificate;



