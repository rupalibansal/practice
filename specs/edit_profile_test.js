// Import the needed method files- Common method file:
// Import the required  test Data file: test Users file:
// Import the required url file : setup file


let commonMethods = require('../methods/commonMethods.js');
let testUsers = require('../data/testUsers.json');
let url = require('../data/setup.json');


describe('rma tests', () => {
    it('should be able to login', async () => {
        // Open the website ----Done      
        commonMethods.openBrowser(url.baseURL);
        // Login ------
        commonMethods.login(testUsers.email, testUsers.password);
        //2 Click on janna
        element.all(by.binding('currentUser.name')).first().click();

        // 3 Click on the Edit Profile:
        element(by.cssContainingText('span', 'Edit Profile')).click();
        browser.sleep(2000);

        element(by.model('$ctrl.suburbSearchUserInput')).sendKeys("Melbourne");

        element(by.repeater('match in matches track by $index').row(3)).click();

        browser.sleep(8000);
    });
});