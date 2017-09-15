'use strict';

// example: functions

// parameters - default value
function showMessage(name, gender='Other'){
	console.log(`Hi. My name is ${name} and I am ${gender}.`);
}

showMessage('Nelson', 'Male');
showMessage('Satish');


// function names:
// showMessage()
// getName()
// calcAge()
// createForm()
// checkPermission()


// task - 1
function checkAgeUsingTernary(age){
	return (age > 18) ? true : 'Do your parents know?';
}
function checkAgeUsingOr(age){
	return (age > 18) || 'Do your parents know?';
}

console.log(checkAgeUsingTernary(21));
console.log(checkAgeUsingOr(13));

// task - 2
function min(a, b){
	return (a < b) ? a : b;
}
console.log(min(2, 5))
console.log(min(3, -1))
console.log(min(1, 1))
