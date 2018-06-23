var selenium = require('selenium-standalone'); 
//selenium-standalone || seleniumServer-standalone || wdio-selenium-standalone-service
var seleniumServer;
// selenium.start({
//         spawnOptions: {
//         stdio: 'inherit'
//         }
//     }, function(err, child) {
//     child.kill();
// });
exports.config = {
<<<<<<< HEAD
    //
=======
>>>>>>> 1eced0746df75816855996957f25b8a92b1c3eaf
    // =================
    // Specify Test Files
    // =================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    specs: [
        // './test/specs/**/*.js'
<<<<<<< HEAD
        // './test/Components/signup_Com.js',browser.moveTo(LogoutPage.Logout.User_Profile,165.859,36);
<<<<<<< HEAD
=======
        
>>>>>>> a2311f3fa0cffbe7db1554ee9d79e7d3df4f9ba1
=======
        // './test/Components/signup_Com.js',browser.moveTo(LogoutPage.Logout.User_Profile,165.859,36);        
>>>>>>> 1eced0746df75816855996957f25b8a92b1c3eaf
        './test/specs/login_Spec.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    maxInstances: 1,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [{
        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
        maxInstances: 1,
        //
        browserName: 'Chrome', //phantomjs || Chrome

    /**************************** This is for chrome  ************************************/

        chromeOptions: {
                args: [
                    '--disable-gpu',
                    '--disable-impl-side-painting',
                    '--disable-gpu-sandbox',
                    '--disable-accelerated-2d-canvas',
                    '--disable-accelerated-jpeg-decoding',
                    '--no-sandbox',
                    '--test-type=ui',
                    ],
            },
    /**************************** This is for chrome  ************************************/

    /**************************** This is for phantomjs ************************************/
            services: ['phantomjs',selenium,'testingbot'],
            user: process.env.TB_KEY,
            key: process.env.TB_SECRET,
            tbTunnel: true,

            phantomjsOpts: {
                webdriverLogfile: 'phantomjs.log',
                maxInstances: 1,
                ignoreSslErrors: true 
            },
    /**************************** This is for phantomjs ************************************/
      
    }],
<<<<<<< HEAD
<<<<<<< HEAD
    //
    // exports.config = {
    // ...


     services: ['selenium-standalone'],
  // ...
  // Options are set here as well
     seleniumLogs: './logs',
=======
 
    



=======
>>>>>>> 1eced0746df75816855996957f25b8a92b1c3eaf
    // ...
    // Options are set here as well
    // seleniumLogs: './logs',
    //...
    // };
>>>>>>> a2311f3fa0cffbe7db1554ee9d79e7d3df4f9ba1
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    debug: false,
    execArgv: null,
    // By default WebdriverIO commands are executed in a synchronous way using
    // the wdio-sync package. If you still want to run your tests in an async way
    // e.g. using promises you can set the sync option to false.
    sync: true,
    //
    // Level of logging verbosity: silent | verbose | command | data | result | error
    logLevel: 'silent',
    //
    // Enables colors for log output.
    coloredLogs: true,
    //
    // Warns when a deprecated command is used
    deprecationWarnings: true,
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Saves a screenshot to a given path if a command fails.
    screenshotPath: './errorShots/',
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: 'http://localhost',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 90000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Initialize the browser instance with a WebdriverIO plugin. The object should have the
    // plugin name as key and the desired plugin options as properties. Make sure you have
    // the plugin installed before running any tests. The following plugins are currently
    // available:
    // WebdriverCSS: https://github.com/webdriverio/webdrivercss
    // WebdriverRTC: https://github.com/webdriverio/webdriverrtc
    // Browserevent: https://github.com/webdriverio/browserevent
    // plugins: {
    //     webdrivercss: {
    //         screenshotRoot: 'my-shots',
    //         failedComparisonsRoot: 'diffs',
    //         misMatchTolerance: 0.05,
    //         screenWidth: [320,480,640,1024]
    //     },
    //     webdriverrtc: {},
    //     browserevent: {}
    // },
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    // services: [],//


    //
    

    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: http://webdriver.io/guide/testrunner/frameworks.html
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'jasmine',
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: http://webdriver.io/guide/reporters/dot.html
    // reporters: ['dot'],
    
    //
    // Options to be passed to Jasmine.
<<<<<<< HEAD
    // jasmineNodeOpts: {
    //     //
    //     // Jasmine default timeout
    //     defaultTimeoutInterval: 10000,
    //     //
    //     // The Jasmine framework allows interception of each assertion in order to log the state of the application
    //     // or website depending on the result. For example, it is pretty handy to take a screenshot every time
    //     // an assertion fails.
    //     expectationResultHandler: function(passed, assertion) {
    //         // do something
    //     }
    // },
=======
    jasmineNodeOpts: {
        //
        // Jasmine default timeout
        defaultTimeoutInterval: 20000,
        //
        // The Jasmine framework allows interception of each assertion in order to log the state of the application
        // or website depending on the result. For example, it is pretty handy to take a screenshot every time
        // an assertion fails.
        expectationResultHandler: function(passed, assertion) {
            // do something
        }
    },
>>>>>>> a2311f3fa0cffbe7db1554ee9d79e7d3df4f9ba1
    
    // exports.config = {
    // ...
    // ...
    // }
    //

     reporters: ['spec', 'allure','junit'],
    reporterOptions: {
        allure: {
            outputDir: 'allure-results'
        },
    //     junit: {
    //         outputDir: './'
    //     }
    },

    // =====
    // Hooks
    // =====

    // services: ['selenium-standalone','phantomjs'],
    //  phantomjsOpts: {
    //     webdriverLogfile: 'phantomjsdriver.log',
    //     ignoreSslErrors: true
    //  },

    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.


    //  jasmineNodeOpts: {
    //     //
    //     // Jasmine default timeout
    //     defaultTimeoutInterval: (24*60*60*1000),
      
    //     // The Jasmine framework allows interception of each assertion in order to log the state of the application
    //     // or website depending on the result. For example, it is pretty handy to take a screenshot every time
    //     // an assertion fails.
    //     expectationResultHandler: function(passed, assertion) {
    //         // do something
    //     }
    // },


    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */ 
    // onPrepare: function (config, capabilities) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
<<<<<<< HEAD

    //  onPrepare: function (config, capabilities) {
    //  return new Promise((resolve, reject) => {
    //     selenium.start((err, process) => {
    //      if(err) {
    //       return reject(err);
    //     }
    //     seleniumServer = process;
    //     resolve(process);
    //   })
    // });
    // },

    // beforeSession: function (config, capabilities, specs) {
    // },
=======
    // beforeSession: function (config, capabilities, specs) {
    // },
    before: function (config, capabilities) {
     return new Promise((resolve, reject) => {
        selenium.start((err, process) => {
         if(err) {
          return reject(err);
        }
        seleniumServer = process;
        resolve(process);
      })
    });
    },
<<<<<<< HEAD
      
>>>>>>> a2311f3fa0cffbe7db1554ee9d79e7d3df4f9ba1
=======
    
    after: function(exitCode) {
        seleniumServer.kill();  
        console.log('that\'s it');
    },

>>>>>>> 1eced0746df75816855996957f25b8a92b1c3eaf
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    // before: function (capabilities, specs) {
    // },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    
    /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
    // beforeSuite: function (suite) {
    // },
    /**
     * Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
     * @param {Object} test test details
     */
    // beforeTest: function (test) {
    // },
    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
    // beforeHook: function () {
    // },
    /**
     * Hook that gets executed _after_ a hook within the suite ends (e.g. runs after calling
     * afterEach in Mocha)
     */
    // afterHook: function () {
    // },
    /**
     * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) ends.
     * @param {Object} test test details
     */
    // afterTest: function (test) {
    // },
    /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
    // afterSuite: function (suite) {
    // },
    
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
<<<<<<< HEAD
     */
<<<<<<< HEAD
    // onComplete: function(exitCode, config, capabilities) {
    // }
    // onComplete: function(exitCode) {
    //     seleniumServer.kill();
        
    // }
=======
=======
     */ 
<<<<<<< HEAD

>>>>>>> a2311f3fa0cffbe7db1554ee9d79e7d3df4f9ba1
    onComplete: function(exitCode, config, capabilities) {
        seleniumServer.kill();      
    }

=======
>>>>>>> 1eced0746df75816855996957f25b8a92b1c3eaf
    // if (this.process) { 
    //  this.process.kill() 
    // }

>>>>>>> d4b326b29182b4498c43457ee3132c6daa193bf9
}
