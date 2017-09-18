'use strict';

/**
 * @fileOverview Symbols
 */

let id = Symbol('id');
console.log(id) 	// Symbol(id)

let student = {
	name: 'Nelson',
	college: 'MSEC',
}

for(let key in student) {
	console.log(`${key}: ${student[key]}`);
}

let id2 = Symbol('id')
student[id2] = '1me10cs038'

for(let key in student) {
	console.log(`${key}: ${student[key]}`);
}
console.log(student[id2])