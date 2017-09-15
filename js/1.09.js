'use strict';

// alert
alert('This is alert');

// prompt
let questionAge = 'How old are you?';
let age = prompt(questionAge, 0);
console.log(`You are ${age} years old.`);

// confirm
let questionMale = 'Are you male?';
let male = confirm(questionMale);
console.log(`You are male: ${male}`);

// test
let questionName = 'What is you name';
let name = prompt(questionName, 'name');
console.log(`Your name is ${name}`);
