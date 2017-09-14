// example: type conversions

// to string
let value = true
console.log(typeof value)
value = String(value)
console.log(typeof value)

// to number
let num = "10"
console.log(typeof num)
num = Number(num)
console.log(typeof num)

console.log(Number(4)) 		// 4
console.log(Number('123'))	// 123
console.log(Number('  123  '))	// 123 - string is stripped from whitespaces & converted
console.log(Number('5m'))	// NaN
console.log(Number(undefined))	// NaN
console.log(Number(null))	// 0
console.log(Number(true))	// 1
console.log(Number(false))	// 0

console.log('20' / '10') 	// 2 - converted to number
console.log('2' * '3') 		// 6 - converted to number
console.log('20' - '10') 	// 10 - converted to number
console.log('20' + '10') 	// 2010 - NOT converted to number, '+' symbol concatenates

// to boolean
console.log(Boolean(true)) 		// true
console.log(Boolean(false))		// false
console.log(Boolean(1)) 		// true
console.log(Boolean(0))			// false
console.log(Boolean(123)) 		// true - every number other than 0 is true
console.log(Boolean('hello'))	// true
console.log(Boolean(''))		// false - only empty string is false
console.log(Boolean('0'))		// true - non empty
console.log(Boolean('  '))		// true - non empty
console.log(Boolean(null))		// false
console.log(Boolean(undefined))	// false

// test
console.log("" + 1 + 0) 	// coz string concat
console.log("" - 1 + 0) 	// empty == null, Number(null) == 0
console.log(true + false)	// 1 + 0
console.log(6 / "3") 		// 2
console.log("2" * "3") 		// 6
console.log(4 + 5 + "px")   // 9px
console.log("$" + 4 + 5) 	// $45
console.log("4" - 2) 		// 2
console.log("4px" - 2) 		// NaN
console.log(7 / 0) 			// Infinity
console.log("  -9\n" + 5) 	// -9 newline 5, coz string concat \n is treated as new line as in normal string
console.log("  -9\n" - 5) 	// -14, \n is whitespace, and is trimmed
console.log(null + 1) 		// 1 - null is 0
console.log(undefined + 1) 	// NaN
