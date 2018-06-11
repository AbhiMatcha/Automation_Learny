/*
 ***** Contians all user defined variables *****
*/
 Learnyst = {
	TestData:{
		IMPLICIT_WAIT_TIME: 15000,
	  LONG_WAIT_TIME: 30000,
    SHORT_WAIT_TIME:1000,
	  PAUSE_WAIT_TIME: 5000,
		LONG_PAUSE_WAIT_TIME: 10000,
		COURSE_TITLE: 'IdealCourse',
		BUNDLE_TITLE: 'IdealBundle',
		COURSE_ID: 9231,
		SCHOOL_ID:1516,
    BUNDLE_ID:9367,
		COURSE_URL: "http://learnnew.learnyst.com/learn/IdealCourse",
		LESSON_URL: "http://learnnew.learnyst.com/learn/IdealCourse/9719/41800", 
		FREE_LESSON_URL: "http://learnnew.learnyst.com/learn/IdealCourse/9719/41800",
		PAID_LESSON_URL: "http://learnnew.learnyst.com/learn/IdealCourse/9719/41802",
		PAYMENT_GATEWAYURL: "https://www.instamojo.com/",
		ENROLLED_Text: "ENROLLED",
		MOCKTEST_TITLE: 'MockTest  1',
		MOCKTEST_ID: 8912,
		SUP_USER_MODE:1,
  	ENROLLED_USER_MODE:2,
    CONTACT:'+919876543121',
    COUPON:'fifty',
  	PAID_USER_MODE:3,
  	COURSE:1,
  	MOCKTEST:2,
  	BUNDLE:3,
    PASSWORD:'learnyst',
  	DASHBOARD_URL:"http://learnnew.learnyst.com/learn",
		MOCKTEST_URL: "http://learnnew.learnyst.com/learn/MockTest--1",
    shortPause:function(){ return browser.pause(Learnyst.TestData.SHORT_WAIT_TIME);},
		pause: function(){ return browser.pause(Learnyst.TestData.PAUSE_WAIT_TIME);},
		longPause: function(){ return browser.pause(Learnyst.TestData.LONG_PAUSE_WAIT_TIME);},
		pageload:function(){ return browser.timeouts('page load',Learnyst.TestData.IMPLICIT_WAIT_TIME);}
	},
	sup:{
    username:'abhishek.matcha@learnyst.com',
    password:'abhi1234'
  },
  forenroll:{
    Random_email: { 
      value: function(){
        var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var email = '';
        for(var i=0; i<15; i++){
          email += chars[Math.floor(Math.random() * chars.length)];
        }
        var emailID= email + '@yopmail.com';
        return emailID;
      }
    },
    password:'abhi1234'
  },

  randomBank:{
    bank: { 
       value: function(){
        var selectBank = [ "ICIC","SBIN" ];
        var randomNumber = Math.floor(Math.random()*selectBank.length);
        return selectBank[randomNumber];
      }
    },
    password:'abhi1234'
  },

  enrolled:{
  	username:'abhishek.matcha@gmail.com',
    password:'abhi1234'
  },
  paid:{
  	username:'Testing.Paiduser@gmail.com',
  	password:'learnyst'
  },
  offeredCourses:{
    COURSE:'Math',
    MOCKTEST:'JEEMOCKTEST',
    BUNDLE:'AIEEE',
  },
  myCourses:{
    COURSE:'FREEIDEALCOURSE',
    MOCKTEST:'TruthaboutDEATH',
    BUNDLE:'FREEBUNDLE'
  },
  getUserMode:function(userMode){
    if(userMode === Learnyst.TestData.SUP_USER_MODE) {
      return 'SIGNED UP USER';
    }
    if(userMode === Learnyst.TestData.ENROLLED_USER_MODE) {
   		return 'ENROLLED USER';
 	}
 	if(userMode === Learnyst.TestData.PAID_USER_MODE) {
   		return 'PAID USER';
 	} 	
  }
}
module.exports = Learnyst;