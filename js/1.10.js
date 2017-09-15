'use strict';

// test - 1
if ("0"){
	console.log('0 is displayed');
}

// test - 2
let questionJsName = 'What is the official name of JavaScript?';
let answerJsName = prompt(questionJsName, '');
if (answerJsName === 'ecmascript'){
	console.log('Correct!');
}
else{
	console.log('Dint know? ECMAScript.');
}

// test - 3
let questionNumber = 'Enter a number';
let answerNumber = prompt(questionNumber, '');
if (+answerNumber < 0){
	console.log(-1)
}
else if (+answerNumber > 0){
	console.log(1)
}
else if (+answerNumber === 0){
	console.log(0)
}

// test - 4
let questionUsername = 'Enter your Username';
let questionPassword = 'Enter your password';
let wrongUsername = 'I dont know you.';
let wrongPassword = 'Wrong Password';
let cancelled = 'Cancelled';
let success = 'Welcome!';
let userName = prompt(questionUsername, '');
let password;

if (userName === 'admin'){
	password = prompt(questionPassword, '');
	if (password === 'master'){
		console.log(success);
	}
	else if ((password == null) || (password == '')){
		console.log(cancelled);
	}
	else{
		console.log(wrongPassword);
	}
}
else if ((userName == null) || userName == ''){
	console.log(cancelled);
}
else {
	console.log(wrongUsername);
}

// test - 5
let position = (3 < 7) ? 'below' : 'after';
console.log(position)

// test - 6
let login = prompt('Who are you?')
let message = (login === 'employee') ? 
				'hello' : (login === 'director') ? 
							'greetings' : (login === '') ?
											'No login' : ''
console.log(message)
