'use strict';

/**
 * @fileOverview 
 * A simple calculator program, which takes input from user and gives back result
 */

/**
 * controls the flow of execution
 * 
 * @author nelson.sequiera
 */
let main = () => {
	let a = askInput('Please enter the first number');
	let b = askInput('Please enter the second number');
	let operation = askInput('Please choose the operation:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide');
	let result;

	switch(+operation) {
		case 1:
			result = add(+a, +b)
			break;
		case 2:
			result = subtract(+a, +b)
			break;
		case 3:
			result = multiply(+a, +b)
			break;
		case 4:
			result = divide(+a, +b)
			break;
	}

	showResult(result);
}

/**
 * Show the result of the operation
 * @param  {Number} result The result to be displayed
 * @return {null}
 */
let showResult = (result) => {
	alert(`The result is ${result}`);
};

/**
 * Ask user for the input using prompt
 * @param  {String} question Question to be asked to the user
 * @return {Number} input Value given by user
 */
let askInput = (question) => {
	return prompt(question, 0);
};

/**
 * Add two given numbers
 * 
 * @param  {Number} a first number
 * @param  {Number} b second number
 * @return {Number} added result
 */
let add = (a, b) => (a + b)

/**
 * Subtract two given numbers.
 * 
 * @param  {Number} a first number
 * @param  {Number} b second number
 * @return {Number} subtracted result
 */
let subtract = (a, b) => (a - b)

/**
 * Multiply two numbers
 * 
 * @param  {Number} a first number
 * @param  {Number} b second number
 * @return {Number} multiplied result
 */
let multiply = (a, b) => (a * b)

/**
 * Divide two numbers
 * 
 * @param  {Number} a first number	
 * @param  {Number} b second number
 * @return {Number} divided result
 */
let divide = (a, b) => (a / b)

main()