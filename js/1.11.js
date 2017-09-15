'use strict';

// example: logical operators

// OR (||) - first truthy
// OR converts values to Boolean - returns first TRUE value it found
let emptyName = null
let realName = 'nelson'
let anotherEmptyName = null

let theName = emptyName || realName || anotherEmptyName || 'no name'
console.log(theName) 	// nelson - returns first true value

// checking for null or undefined
let someValue = null;
let anotherValue;
// old way
if (someValue === null){
	anotherValue = 'a value'
}
console.log(anotherValue);
// new way - using OR
anotherValue = someValue || 'the value'
console.log(anotherValue);


// AND (&&) - first falsy
// AND converts values to Boolean - returns first FALSE value
let year = ('2015' && '2016' && null && '2018')
console.log(year) 	// null - return first falsy value


// NOT (!)
// NOT (!) converts value to Boolean - returns inverse of that value.
// NOT (!!) converts value to Boolean - returns Booelean value.
let trueValue = 'true'
console.log(typeof trueValue); 		// string
trueValue = !!trueValue 			// instead of Boolean(trueValue)
console.log(typeof trueValue); 		// boolean


// tasks
console.log(null || 2 || undefined) 	// 2
console.log(console.log(1) || 2 || console.log(3)); 	// 2 - executes console.log(1) returns undefined, executes 2 returns 2, halts
console.log( 1 && null && 2) 	// null
console.log( console.log(1) && console.log(2) ); 	// undefined - executes console.log(1) returns undefined, halts
console.log( null || 2 && 3 || 4 ); 	// 3

let teenAge = 17;
if (teenAge >= 13 || teenAge <=19){
	console.log("She's in teenage");
}

teenAge = 24
if (teenAge < 13 || teenAge >19){
	console.log("She's not in teenage");
}

if (-1 || 0) console.log( 'first' ); 		// first : -1
if (-1 && 0) console.log( 'second' ); 		// -- : 0
if (null || -1 && 1) console.log( 'third' ); 	// third : 1