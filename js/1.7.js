'use strict';

// unary +
let ten = '10'
let twenty = '20'
console.log(ten + twenty) 	// 1020 - string concat
console.log(Number(ten) + Number(twenty)) 	// 30
console.log(+ten + +twenty) 	// 30 : unary + is same as Number


// "=" returns a value
let a = 5
let b = 3
let c = 5 - (a = b + 2) 	// 5 - (a = 5) ===> 5 - 5 ===> 0
console.log(a)
console.log(c)


// comma (,) - very low precedence
let x;
let y;
let res = (x = 3, y = 4, 'Nelson') 	// comma WITH-IN parantheses - evaluates multiple expressions, but returns last result
console.log(x) 		// 3
console.log(y)		// 4
console.log(res) 	// nelson

res = x = 6, y = 7, 'Nelson' 	// comma WITH-OUT parantheses - evaluates higher precedence = but returns in order
console.log(x) 		// 6
console.log(y) 		// 7
console.log(res) 	// 6

// test
let p = 1, q = 1;
let r = ++p;
let s = q++;
console.log(p) 		// 2
console.log(q) 		// 2
console.log(r) 		// 2
console.log(s) 		// 1

let aa = 2;
let xx = 1 + (aa *= 2);
console.log(aa) 	// 4
console.log(xx) 	// 5