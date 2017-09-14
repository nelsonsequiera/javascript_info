// 1.2 - example: script tag
console.log("I'm JavaScript from external");


// 1.3 - example: use strict
// 'use strict'; at the top of file to use modern JS


// 1.4  - example: variables
console.log("***VARIABLES***")
let admin
let name = 'John'

admin = name
console.log(admin)

// verbose names
let ourPlanetName = 'Earth'
let currentVisitorName = 'Nelson'

function getAge(date){
	return 24;	// should compute and send
}

const BIRTHDAY = '24-02-1993'	// const in uppercase bcoz hard-coded
const age = getAge(BIRTHDAY);	// const in lowercase because its dynamic


// 1.5 - example: data types
console.log('***DATA TYPES***')

// PRIMITIVE
// number
let number = 5
console.log(number); 	// 5
console.log(number / 0); 	// Infinity
console.log(-number / 0); 	// -Infinity
console.log("not a number" / number); 	// NaN

// string
let doubleQuotes = "Nelson" 	// simple quotes
let singleQuotes = 'Sequiera'	// simple quotes
let backTicks = `My name is ${doubleQuotes} ${singleQuotes}` 	// extended quotes
console.log(doubleQuotes);
console.log(singleQuotes);
console.log(backTicks);

// null
let myGirlFriend = null; 	// myGirlFriend is unknown or empty
console.log(myGirlFriend)

// undefined
let someThing;
console.log(someThing)


// typeof
console.log("***TYPE OF***")
console.log(typeof undefined)
console.log(typeof 1)
console.log(typeof 'nel')
console.log(typeof true)
console.log(typeof Math)
console.log(typeof Symbol('id'))
console.log(typeof null) 	// return object which is wrong. type of null is null not object
console.log(typeof alert)
