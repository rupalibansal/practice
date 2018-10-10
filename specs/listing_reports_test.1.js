let url = require('../data/setup.json');
let testUser = require('../data/testUsers.json');
let commonMthd = require('../methods/commonMethods.js');
let loginElements = require('../elements/login_page.js');
let currentUser = require('../elements/currentUser_page.js');
let listingReports = require('../elements/listing_reports_page.js');

fdescribe('Rate My Agent Test Cases', () => {
    it('Should be able to create a listing report', () => {
        //open the browser

        commonMthd.openBrowser(url.baseURL);

        commonMthd.waitForElem(loginElements.objects.loginbtn);
        commonMthd.login(testUser.email, testUser.password);

        var user = currentUser.objects.currentUserName.first();
        commonMthd.waitForElem(user);
        user.click();

        listingReports.objects.listingReportsElem.click();

        commonMthd.waitForElem(listingReports.objects.newReportBtn);
        listingReports.objects.newReportBtn.click();

        commonMthd.waitForElem(listingReports.objects.addressTxtBox);
        listingReports.objects.addressTxtBox.sendKeys(testUser.address);
        browser.sleep(2000);
        listingReports.objects.addressTxtBox.sendKeys(protractor.Key.DOWN);
        listingReports.objects.addressTxtBox.sendKeys(protractor.Key.ENTER);

        listingReports.objects.propertyType.get(2).click();

        listingReports.objects.beds.get(4).click();

        listingReports.objects.bathFinal.click();

        var car = listingReports.objects.carParent;
        car.element(by.css('[label="1"]')).click();

        browser.sleep(3000);

        listingReports.objects.firstName.sendKeys(testUser.firstName);
        listingReports.objects.lastName.sendKeys(testUser.lastName);

        commonMthd.waitForElem(listingReports.objects.nextbtn);
        commonMthd.clickNxtBtn();
        commonMthd.waitForElem(listingReports.objects.nextbtn);
        commonMthd.clickNxtBtn();
        commonMthd.waitForElem(listingReports.objects.nextbtn);
        commonMthd.clickNxtBtn();

        commonMthd.waitForElem(listingReports.objects.firstComparableSale);
        listingReports.objects.firstComparableSale.click();

        commonMthd.clickNxtBtn();

        commonMthd.waitForElem(listingReports.objects.firstReview);
        listingReports.objects.firstReview.click();

        commonMthd.clickNxtBtn();
        browser.sleep(2000);
    
    });
});