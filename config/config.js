/*
1.seleniumAddress: 'http://localhost:4444/wd/hub'
The Configuration file tells Protractor the location of Selenium Address to talk with Selenium WebDriver.

specs: ['spec.js']
This line tells Protractor the location of test files spec.js*/


exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ["../specs/*.js"],
    onPrepare: function() {
      browser.manage().window().setSize(1500, 1000);
    }
    
    
  };