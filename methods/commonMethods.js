// All the common methods. 
// Import the required Elements - Locators file
// Open Browser: open the website
// Login: Login Functionality 
// Export the methods:

let loginElements = require('../elements/login_page.js');
let listingReports = require('../elements/listing_reports_page.js');


let openBrowser = function(url)
{
  browser.get(url);
}


let login = function (email,password) {    
      // click on the login button   
      loginElements.objects.loginbtn.click();
      // Input the Username:
      loginElements.objects.email.sendKeys(email);
      // Input the password
      loginElements.objects.password.sendKeys(password);
      // Click on the Login Button:
      loginElements.objects.loginBTN.click();
}

let waitForElem = function(elem){
    var EC = protractor.ExpectedConditions;
    //browser.wait(EC.visibilityOf(elem), 8000, 'Element taking too long to appear in the DOM');
    browser.wait(EC.visibilityOf(elem), 8000);

}

 let clickNxtBtn =  function(){
  listingReports.objects.nextbtn.click();
}

module.exports = {
    openBrowser,
    login,
    waitForElem,
    clickNxtBtn
    
}