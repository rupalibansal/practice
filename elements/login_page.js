// All the Locators used for Login Page:

let objects = {
     email : element(by.model('login.Email')),
     password : element(by.model('login.Password')),
     loginbtn : element(by.css('a[ng-click="login()"]')),
     loginBTN : element(by.cssContainingText(".btn",'Log In'))

}

module.exports = {
    objects
}
   