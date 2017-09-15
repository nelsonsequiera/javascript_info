'use strict';


// call back functions

function click(anonymousFunction){
	console.log('this is click function');
	anonymousFunction();
}

click(function(){ 		//  <--- you are passing a function to click, which will be called back by click.
	console.log('this is callback function');
});


// function declaration vs function expression
// function declaration
getAge(); 	// works coz function is created while loading script
function getAge(){
	return 24;
}

// function expression
let getName = function(){
	return 'nelson';
}
getName(); 		// function is created when engine reaches the function code.


// arrow functions - let func = (arg1, arg2, ...argN) => expression
let calcSum = (a, b) => (a + b);
console.log(calcSum(2, 3)); 	// 5

let getDouble = n => (n * 2); 	// if single arg, no need of parantheses
console.log(getDouble(5)); 		// 10

let getDate = () => '15-09-2017';	// if no arg, just put empty parentheses.
console.log(getDate()); 		// 15-09-2017

let complexArrowFunc = (x, y) => { 		// multiline arrow function, use {}
	// something complex here
	return (x + y);
};
console.log(complexArrowFunc(3, 2));


// task
// question
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }
// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );
let ask = (question, yes, no) => (confirm(question) ? yes() : no())
ask('do you agree?',
	() => console.log('you agreed.'),
	() => console.log('you canceled.')
)
