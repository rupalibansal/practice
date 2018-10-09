let objects = {
    reviews_icon: element.all(by.repeater('link in $ctrl.links').row(2)),
    completedReview: element(by.cssContainingText('a', 'Completed Reviews')),
    promoteBtn : element(by.css('div[ng-switch="$ctrl.promotedState"]')),
    templateSelect : element(by.cssContainingText('span', 'Template 2')),
    nextBtn : element(by.css('a.btn-primary[analytics-label="Review - next"]')),
    txtBox : element(by.model("$ctrl.promotion.spend")),
    valueLabel : element(by.binding('$ctrl.reachNumbers()  | number : 0')),
    duration : element.all(by.options("option.Name for option in $ctrl.durationOptions track by option.Name")),
    nxtBTN : element(by.css('button.btn-primary')),
    checkboxSelect1 : element(by.model('$ctrl.termsAndConditions')),
    checkboxSelect : element(by.css("input[type='checkbox']"))
}
module.exports = {
    objects

}