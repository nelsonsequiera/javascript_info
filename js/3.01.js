'use strict';

/**
 * Objects
 * @fileOverview Objects
 */

let objectConstructor = new Object(); 	// object constructor
let objectLiteral = {} 					// object literal
console.log(objectConstructor + objectLiteral)


// dot notation
let users = {
	name: 'Nelson',
	age: 24,
}
console.log(users.name) 	// Nelson

// add new property
users.Admin = true
console.log(users.Admin) 	// true

// delete property
delete users.age;
console.log(users.age) 	// undefined


// sqaure bracket notation
let person = {
	name: 'Sequiera',
	'10th marks': 84
}

// console.log(person.10th marks)  	// error
console.log(person['10th marks']) 	// 84

// NOTE: ALWAYS USE SQUARE BRACKET NOTATION

// property shorthand
let makeEmployee = (name, designation) => {
	let newObj = {
		name: name,
		designation: designation
	}
	return newObj;
}
let employee = makeEmployee('Nelson', 'Full stack developer')
console.log(employee.designation)


let makeEmployeeShortHand = (name, designation) => {
	return {
		name, 	//  same as name: name
		designation, 	
	}
}
let shEmployee = makeEmployeeShortHand('Ravi', 'Devops')
console.log(shEmployee.designation)


// existence check
console.log('designation' in shEmployee);
console.log('gottilla' in shEmployee);


// for .. in
let address = {
	doorNo: '#8',
	street: 'madava upanagar',
	state: 'karnataka',
}
for (let key in address) {
	console.log(`${key}: ${address[key]}`);
}


// copy by reference
let apple = {
	color: 'red',
	size: 'big',
};
let orange = apple;
console.log(`apple color: ${apple.color}, orange color: ${orange.color}`);
orange['color'] = 'orange'; 	// changes all copies, coz only reference is given.
console.log(`apple color: ${apple.color}, orange color: ${orange.color}`);


// comparision
console.log(apple === orange) 	// true
let red = {}
let black = {}
console.log(red === black) 		// false



// const
const bus = {
	color: 'white',
	seats: 22,
}
bus['seats'] = 23 		// works coz assigning inside const object, not to const itself

// bus = {} 	// doesnot work.


// test - 1
let user = {};
user['name'] = 'john';
user['surname'] = 'smith';
user['name'] = 'pete';
delete user['name']


// test - 2
/**
 * Checks if given object is empty
 * @function
 * @param  {object} object object to be tested
 * @return {boolean}        true if object is empty
 */
let isEmpty = (object) => {
	for (let key in object){
		return false;
	}
	return true;
}

let car = {};
console.log(isEmpty(car));
car['name'] = 'baleno'
console.log(isEmpty(car));



// test - 4
/**
 * Calculates the sum of employes
 * @function
 * @param  {object} employee employee object with salaries
 * @return {number}          the sum of all salaries
 */
let calcSum = (employee) => {
	let sum = 0;
	for(let salary in employee){
		sum += employee[salary];
	}
	return sum;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
console.log(`The total salary we give is: ${calcSum(salaries)}`);


// test - 5
/**
 * Double only numeric values in given object.
 * @function
 * @param  {object} menu object in which numbers has to be doubled
 * @return {null}      nothing
 */
let doubleNumbers = (menu) => {
	for(let key in menu){
		if(typeof menu[key] === 'number'){
			menu[key] *= 2;
		}
	}
}

let menu = {
	width: 200,
	height: 100,
	title: 'mobile',
}
console.log('Before doubling');
for(let key in menu){
	console.log(`${key}: ${menu[key]}`);
}
doubleNumbers(menu);
console.log('After doubling');
for(let key in menu){
	console.log(`${key}: ${menu[key]}`);
}