let url = require('../data/setup.json');
let testUser = require('../data/testUsers.json');
let commonMthd = require('../methods/commonMethods.js');
let loginElements = require('../elements/login_page.js');
let currentUser = require('../elements/currentUser_page.js');
let listingReports = require('../elements/listing_reports_page.js');

describe('Rate My Agent Test Cases', () => {
    it('Should be able to create a listing report', () => {

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



        //var EC = protractor.ExpectedConditions;
        // var btnElement = element.all(by.cssContainingText('a', 'Log in')).first();
        //browser.wait(EC.visibilityOf(btnElement), 5000, 'Element taking too long to appear in the DOM');
        //btnElement.click();
        // element(by.model('login.Email')).sendKeys('janna.cruz@jcbesthomes.com');
        // loginElements.objects.password.sendKeys('rma.testuser');
        //element(by.cssContainingText('a', 'Log In')).click();
        //var currentUserName = element.all(by.binding('currentUser.name')).first();
        //browser.wait(EC.visibilityOf(currentUserName), 5000, 'Element taking too long to appear in the DOM');
        //currentUserName.click();
        // var nextBtn = element(by.css("button[ng-click='add()']"));
        // browser.wait(EC.visibilityOf(nextBtn), 5000, 'Elemet taking too long in the DOM');
        //var addressTxtBox = element(by.model('vm.fullAddress'));
        //browser.wait(EC.visibilityOf(addressTxtBox), 5000, 'Element taking too long to appear in the DOM');
        //addressTxtBox.sendKeys('432 Queen Street');
        // element.all(by.options('type.Id as type.Name for type in types')).get(2).click();
        // element.all(by.options('number.value as number.label for number in count')).get(4).click();
        //var bath = element(by.model('address.Bathrooms'));
        //bath.element(by.css('option[label="2"]')).click();
        //var car = element(by.model('address.Carparks'));
        //car.element(by.css('option[label="1"]')).click();
        //element(by.model('contact.LastName')).sendKeys('test');
        // function clickNextButton() {
        //     var nextbtn = element(by.cssContainingText('span', 'Next'));
        //     browser.wait(EC.visibilityOf(nextbtn), 5000, 'Element taking too long to appear in the DOM');
        //     nextbtn.click();
        // };
        // clickNextButton();
        // clickNextButton();
        // clickNextButton();
        //var firstComparableSale = element(by.repeater('comparableSale in $ctrl.source').row(0));
        // browser.wait(EC.visibilityOf(firstComparableSale), 5000, 'Element taking too long to appear in the DOM');
        // firstComparableSale.click();
        // clickNextButton();
        //var firstReview = element(by.repeater('review in source').row(0));
        // browser.wait(EC.visibilityOf(firstReview), 5000, 'Element taking too long to appear in the DOM');
        // firstReview.click();
        // clickNextButton();


    });
});