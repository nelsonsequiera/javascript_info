'use strict';

// test
console.log(5 > 4) 					// true
console.log("apple" > "pine") 		// false, a > p
console.log("2" > "12") 			// true, 2 > 12
console.log(undefined == null) 		// true, sweet couple: equal each other only
console.log(undefined === null) 	// false, type is different for both
console.log(null == "\n0\n") 		// false, null only equals to undefined. no one else, sweet couple
console.log(null === +"\n0\n") 		// false, strict equality, type is different