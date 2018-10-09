let objects ={
 listingReportsElem : element(by.cssContainingText('span', 'Listing Reports')),
 newReportBtn : element(by.css("button[ng-click='add()']")),
 addressTxtBox : element(by.model('vm.fullAddress')),
 propertyType : element.all(by.options('type.Id as type.Name for type in types')),
 beds : element.all(by.options('number.value as number.label for number in count')),
 bathParent : element(by.model('address.Bathrooms')),
 bathChild : element(by.css('option[label="2"]')),
 carParent : element(by.model('address.Carparks')),
 carChild : element(by.css('option[label="1"]')),
 firstName : element(by.model('contact.FirstName')),
 lastName : element(by.model('contact.LastName')),
 firstComparableSale : element(by.repeater('comparableSale in $ctrl.source').row(0)),
 firstReview : element(by.repeater('review in source').row(0)),
 bathFinal : element(by.model('address.Bathrooms')).$('[label="2"]'),
 nextbtn : element(by.cssContainingText('span', 'Next'))
}

module.exports = {
    objects
}
   