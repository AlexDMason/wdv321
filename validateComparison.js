/* 
WDV321 Advanced JavaScript

UNIT-8 TDD Using Mocha/Chai Automated Testing

Assignment: 8-1 Develop and test the attached test plan.

Create a function that will accept two numbers. Compare those numbers and display
the larger of the two numbers.

Implement the following tests into Mocha. Refactor the code of your function as needed to 
meet the expectations of the test plan and pass all required tests. 

Test Plan - input two numbers, compare them and display the larger of the two
	
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
	5			""		"Please enter a number in Value 2" */

    var validInput = function(inValue){
        inValue += "";
        if(inValue.trim() == "" || inValue == 'null' || inValue == 'undefined'){
            return false;
        }
        return true;
    }

    module.exports = validInput;