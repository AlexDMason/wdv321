// JavaScript Document

var validInput = function(inValue){
	inValue += "";	//turns all inValues into strings
	if(inValue.trim() == "" || inValue == 'null' || inValue == 'undefined'){
		return false;
	}
	return true;
}

module.exports = validInput;


/*
	Value1		value2		Expected Result
	5			6		6
	4			3		4
	3			3		"The amounts are equal"		They entered numbers, same numbers they are equal
	a			5		"Please enter a number in Value 1"
	5			a		"Please enter a number in Value 2"
	""			5		"Please enter a number in Value 1"
	5			""		"Please enter a number in Value 2"
	-1			5		5
	+34			-30		34
	-5			-6		-5
	5			-1		5
	1.5			2		2
	2			1.5		2
	3/4			1		"Please enter a number in Value 1"	Fractions are not integers or decimal numbers
	5b			3		"Please enter a number in Value 1"
	3			5b		"Please enter a number in Value 2"
	""			5		"Please enter a number in Value 1"
	5			""		"Please enter a number in Value 2"
*/

// JavaScript Document

var assert = require('chai').assert;	//Chai assertion library
var validInput = require('../app/validateComparison');

describe("Testing Input Required", function(){
	
	it("The number 1 should pass", function() {
		assert.isTrue(validInput(1));
	});
	
	it("Empty or '' should fail", function() {
		assert.isFalse(validInput(' '));
	});	
	
    var validInput = function(inValue){
        inValue += "";
        if(inValue.trim() == "" || inValue == 'null' || inValue == 'undefined'){
            return false;
        }
        return true;
    }

	module.exports = validInput;
});