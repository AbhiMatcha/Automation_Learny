// var webdriverio = require('webdriverio');
// var options = {
//     desiredCapabilities: {
//         browserName: 'chrome'
//     }
// };

// webdriverio
//     .remote(options)
//     .init()
//     .url('http://www.google.com')
//     .getTitle().then(function(title) {
//         console.log('Title was: ' + title);
//     })
//     .end()
//     .catch(function(err) {
//         console.log(err);
//     });

var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);

client
    .init()
    .url('https://www.learnyst.com/')
    .getTitle().then(function(title){console.log('Title is: ' + title);})
    .end();

// var webdriver = require('selenium-webdriver'),
//     By = webdriver.By,
//     until = webdriver.until;

// var driver = new webdriver.Builder()
//     .forBrowser('firefox')
//     .build();

// driver.get('http://www.google.com');

// driver.findElement(By.name('q')).sendKeys('webdriver');

// driver.sleep(1000).then(function() {
//   driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB);
// });

// driver.findElement(By.name('btnK')).click();

// driver.sleep(2000).then(function() {
//   driver.getTitle().then(function(title) {
//     if(title === 'webdriver - Google Search') {
//       console.log('Test passed');
//     } else {
//       console.log('Test failed');
//     }
//   });
// });

// driver.quit();


// var webdriver = require('selenium-webdriver');
// var driver = new webdriver.Builder().forBrowser('chrome').build();
// driver.get('http://www.google.com');
// driver.quit();
