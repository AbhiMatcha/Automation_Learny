var selenium = require('selenium-standalone');
var seleniumServer;
const host= 'localhost';
const port= 4444;
  // the following line helps stopping the chromedriver process after
  // killing the selenium process returned by the start method

exports.config = {
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    specs: ['./test/specs/signup_Spec.js'],

    // suites: {
    //     login: [
    //         './test/specs/login_Spec.js',
            
    //     ],
    //     logout: [
    //         './test/specs/logout_Spec.js',
    //         // ...
    //     ]
    // },
    //             // './test/specs/_main_.js',
                
                // './test/specs/support_Spec.js','./test/specs/logout_Spec.js','./test/specs/buyCourse_Spec.js'
      
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
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
    //
    maxInstances: 10,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [{
        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instance available you can make sure that not more than
        // 5 instance gets started at a time.
        maxInstances: 1,
        //
        browserName: 'Chrome',
        services: ['selenium-standalone'],
        // port: '9515',
        // path: '/',
        // // services: ['selenium-standalone'],
        // chromeDriverArgs: ['--port=9999'],
        // chromeDriverLogs: './',
        // chromeDriverArgs: ['--port=9999'],
        //     user: process.env.TB_KEY,
        //     key: process.env.TB_SECRET,
        //     tbTunnel: true,

            // phantomjsOpts: {
            //     webdriverLogfile: 'phantomjs.log',
            //     maxInstances: 1,
            //     ignoreSslErrors: true 
            // },
    // /**************/
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
    }],
    //
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
        bail: 0,

    //
    // Saves a screenshot to a given path if a command fails.
    screenshotPath: './errorShots/',
    //
    // Set a base URL in order to shorten url command calls. If your url parameter starts
    // with "/", then the base url gets prepended.
    baseUrl: 'http://localhost',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 100000,
    //
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 900000,
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
    // // commands. Instead, they hook themselves up into the test process.
    // services: ['selenium-standalone','phantomjs'],
     // phantomjsOpts: {
     //    webdriverLogfile: 'phantomjsdriver.log',
     //    ignoreSslErrors: true
     // },
     // seleniumArgs: {
     //    seleniumArgs: ["-port", "4441"],
     //    },
 
  
        // user: process.env.SAUCE_USERNAME,
        // key: process.env.SAUCE_ACCESS_KEY,
        // sauceConnect: true,

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
    // see also: http://webdriver.io/guide/testrunner/reporters.html
    // reporters: ['spec', 'allure','junit'],
    // reporterOptions: {
    //     allure: {
    //         outputDir: 'allure-results'
    //     },
    //     junit: {
    //         outputDir: './'
    //     }
    // },
    //
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        //
        // Jasmine default timeout
        defaultTimeoutInterval: 5000,
      
        // The Jasmine framework allows interception of each assertion in order to log the state of the application
        // or website depending on the result. For example, it is pretty handy to take a screenshot every time
        // an assertion fails.
        expectationResultHandler: function(passed, assertion) {
            // do something
        }
    },
    
    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    //
    // Gets executed once before all workers get launched.
    onPrepare: function (config, capabilities) {
        seleniumServer = seleniumServer;
     return new Promise((resolve, reject) => {
        selenium.start((err, process) => {
         if(err) {
          return reject(err);
        }
        seleniumServer = process;
        resolve(seleniumServer);
      }, function (error, child) {
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@')
        console.log('stop', error, child)
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@')
  if (!error) {
    // work with webdriverio and when finished, stop selenium:
    console.log('*****************************************************');
    child.kill()
    console.log('*****************************************************');
    // both selenium server and chromedriver process should exit
  }
})
    });
    },

  
    /**

     * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) ends.
     * @param {Object} test test details
     */
    afterTest: function (test) {
        console.log('@@@@@@@@@@@@@@ afterTest @@@@@@@@@@');
        console.log(test);
        console.log('@@@@@@@@@@@@@@  afterTest @@@@@@@@@@');
    },
    /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
     // afterCommand: function(commandName, args, result, error)
     // {
     //    console.log('######### afterCommand #########')
     //    console.log(commandName, args, result, error);
     //    console.log('######## afterCommand ##########')

    //  // },
    // afterSuite: function (suite) {

    //     console.log('@@@@@@@@@@@@@@ afterSuite @@@@@@@@@@');
    //     console.log(suite);
    //     console.log('@@@@@@@@@@@@@@ afterSuite  @@@@@@@@@@');
    //     // process.kill(0);
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
     afterAll: function (result, capabilities,specs,exitCode) {
        console.log('@@@@@@@@@@@@@@ afterAll @@@@@@@@@@');
        console.log(result);
        console.log(capabilities);
        console.log(specs);
        console.log(exitCode);
        console.log('@@@@@@@@@@@@@@ afterAll  @@@@@@@@@@');
        // process.kill(0);
    },

    // after: async () => {
    //    console.log('@@@@@@@@@@@@@@ after @@@@@@@@@@'); 
    //     await browser.pause(2000);
    // },
    // after: function (result, capabilities, specs) {
    //     console.log('@@@@@@@@@@@@@@ after @@@@@@@@@@');

    //     console.log(result);

    //     console.log('@@@@@@@@@@@@@@ after @@@@@@@@@@');


    // },


    // afterSession: function (config, capabilities, specs) {
    //     console.log('@@@@@@@@@@@@@@ afterSession @@@@@@@@@@');
    //     console.log(config);
    //     console.log(Capabilities);
    //     console.log(specs);
    //     // browser.end().pause(1000);
    //     console.log('@@@@@@@@@@@@@@ afterSession @@@@@@@@@@');
        
    // },

    // services: [CustomService],
    //
    // Gets executed before test execution begins. At this point you can access all global
    // variables, such as `browser`. It is the perfect place to define custom commands.
    // before: function (capabilities, specs) {
    // },
    //
    // Hook that gets executed before the suite starts
    // beforeSuite: function (suite) {
    // },
    //
    // Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
    // beforeEach in Mocha)
    // beforeHook: function () {
    // },
    //
    // Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
    // afterEach in Mocha)
    // afterHook: function () {
    // },
    //
    // Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
    // beforeTest: function (test) {
    // },
    //
    // Runs before a WebdriverIO command gets executed.
    // beforeCommand: function (commandName, args) {
    // },
    //
    // Runs after a WebdriverIO command gets executed
    // afterCommand: function (commandName, args, result, error) {
    // },
    //
    // Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
    // afterTest: function (test) {
    // },
    //
    
    onError: function(message,a,b,c) {
    
        console.log('@@@@@@@@@@ onError @@@@@@@@@@');
         // console.log(seleniumServer);
         // console.log(0);
          console.log(message);
          console.log('@@@@@ onError @@@@@')
        // console.log(result);
      
    },
    // Hook that gets executed after the suite has ended
    // afterSuite: function (suite) {
    // },
    //
    // Gets executed after all tests are done. You still have access to all global variables from
    // the test.
    // after: function (result, capabilities, specs) {
    // },
    //
    // Gets executed after all workers got shut down and the process is about to exit. It is not
    // possible to defer the end of the process using a promise.
    onComplete: function(exitCode,config,capabilities) {
        seleniumServer.kill();
        console.log("@@ test Complete @@@");
    }
}
