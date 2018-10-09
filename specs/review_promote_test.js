//Steps to be followed:
//1.Login As an Agent
//2.Click on Janna(Pic)
//3.Click on Review
//4.Click on Completed Review
//5.Click on Promote Button
//6.Select the Template2
//7.Click on the Next Button
//8. Enter the amount in the textbix as $200.
//9 Get the value of Estimated Ad views.
//10.Make the duration as 3 weeks.
//11. Click on the next button.
//12.Agree terms and condition.

let url = require('../data/setup.json');
let testUser = require('../data/testUsers.json');
let testData = require('../data/testData.json');
let commonMthd = require('../methods/commonMethods.js');
let loginElements = require('../elements/login_page.js');
let currentUser = require('../elements/currentUser_page.js');
let reviewsPage = require('../elements/review_promote_page.js');


// 1.Login As an Agent:
describe('Rate My Agent Test Cases', () => {
    it('Should be able to login as an Agent', async () => {
        //browser.driver.manage().window().maximize();
        browser.ignoreSynchronization = true;
        // Open the browser:
        commonMthd.openBrowser(url.baseURL);
        // wait for the element to load and login:
        commonMthd.waitForElem(loginElements.objects.loginbtn);
        commonMthd.login(testUser.email, testUser.password);
        // Click on the janna(Image)
        var user = currentUser.objects.currentUserName.first();
        commonMthd.waitForElem(user);
        user.click();
        //3. Click on the Reviews
        reviewsPage.objects.reviews_icon.click();
        // Wait and click on the completed Reviews:
        commonMthd.waitForElem(reviewsPage.objects.completedReview);
        reviewsPage.objects.completedReview.click();
        // Wait and click on the Promote button:
        commonMthd.waitForElem(reviewsPage.objects.promoteBtn);
        reviewsPage.objects.promoteBtn.click();
        // Wait and select the template 2:
        commonMthd.waitForElem(reviewsPage.objects.templateSelect);
        reviewsPage.objects.templateSelect.click();
        //7. Click on the Next Button:
        reviewsPage.objects.nextBtn.click();
        // 8Enter the amount as$200
        reviewsPage.objects.txtBox.clear();
        reviewsPage.objects.txtBox.sendKeys(testData.promoteReview.amount);
        //9 Get the value:
        let value = reviewsPage.objects.valueLabel;
        value.getText().then(function (text) {
            console.log("The estimated Ad Views is :", text);
        });
        //10 Make the duration as 3 weeks and click the next button:
        reviewsPage.objects.duration.get(2).click();
        commonMthd.waitForElem(reviewsPage.objects.nxtBTN);
        reviewsPage.objects.nxtBTN.click();
        // checkbox element and click on it :
       // let checkboxElement = element(by.id('promoterTermsAndConditions'));
      
        
        // reviewsPage.objects.checkboxSelect.sendKeys(protractor.Key.SPACE);
        reviewsPage.objects.checkboxSelect.sendKeys(protractor.Key.SPACE);
        browser.sleep(4000);








        // browser.get("https://www.ratemyagent.com.au/");
        // //browser.sleep(2000);
        // var EC = protractor.ExpectedConditions;
        // // Waits for the element with id 'abc' to be visible on the dom.
        // browser.wait(EC.visibilityOf(element(by.css('a[ng-click="login()"]')), 5000));
        // element(by.css('a[ng-click="login()"]')).click();
        // element(by.model('login.Email')).sendKeys('janna.cruz@jcbesthomes.com');
        // loginElements.objects.password.sendKeys('rma.testuser');
        // element(by.cssContainingText('a', 'Log In')).click();
        // //browser.sleep(2000);
        // browser.wait(EC.visibilityOf(element(by.binding('currentUser.name')), 5000));
        //2. Click on janna(pic)
        //  element.all(by.binding('currentUser.name')).first().click();
        //  element.all(by.repeater('link in $ctrl.links').row(2)).click();
        // browser.wait(EC.visibilityOf(element(by.cssContainingText('a', 'Completed Reviews')), 5000));
        //4. click on the Completed Reviews:
        //element(by.cssContainingText('a', 'Completed Reviews')).click();
        //browser.sleep(2000);
        //5. Click on the promote Button:
        // browser.wait(EC.visibilityOf(element(by.css('div[ng-switch="$ctrl.promotedState"]')), 5000));
        // element(by.css('div[ng-switch="$ctrl.promotedState"]')).click();
        // browser.sleep(2000);
        //6. Select the template 2
        // browser.wait(EC.visibilityOf(element(by.cssContainingText('span', 'Template 2')), 5000));
        // element(by.cssContainingText('span', 'Template 2')).click();
        // element(by.css('a.btn-primary[analytics-label="Review - next"]')).click();
        // browser.sleep(3000);
        //let txtbox = element(by.model("$ctrl.promotion.spend"));
        //txtbox.clear();
        //browser.sleep(1000);
        //txtbox.sendKeys('$200');
        // let value = element(by.binding('$ctrl.reachNumbers()  | number : 0'));
        //console.log(value.getText());
        //value.getText().then(function (text) {
        // console.log("The estimated Ad Views is :", text);
        //});
        //element.all(by.options("option.Name for option in $ctrl.durationOptions track by option.Name")).get(2).click();
        //browser.sleep(1000);
        //browser.wait(EC.visibilityOf(element(by.css('button.btn-primary')), 5000));
        //11. Click on the next button:
        //element(by.css('button.btn-primary')).click();
        //browser.sleep(3000)
        // select the terms and conditions:
        //browser.wait(EC.visibilityOf(element(by.css("input[type='checkbox']")), 5000));
        //element(by.css("input[type='checkbox']")).sendKeys(protractor.Key.SPACE);
        //browser.sleep(3000);
        
    })

});