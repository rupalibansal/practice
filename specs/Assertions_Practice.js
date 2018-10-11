// JASMINE: jasmine is a behaviour driven development (BDD) framework for testing the javascript code:
// BDD means the test cases are written in easy understandable language 
//Expectations are built with the function expect which takes a value, called the actual. It is chained with a Matcher function, which takes the expected value.
// Assertions are just the validations .

describe('Assertions Suite', () => {

    it('Should match the label of the button', () => {
        var foo = function () {
            return 1 + 2;
        };
        var bar = function(){
            return a+1;
        };
        var baz = function(){
            throw 'what';
        };
        expect(baz).not.toThrow();


    });
});