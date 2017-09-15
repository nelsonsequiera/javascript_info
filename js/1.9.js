'use strict';

// alert
alert('This is alert');

// prompt
let question_age = 'How old are you?';
let age = prompt(question_age, 0);
console.log(`You are ${age} years old.`);

// confirm
let question_male = 'Are you male?';
let male = confirm(question_male);
console.log(`You are male: ${male}`);

// test
let question_name = 'What is you name';
let name = prompt(question_name, 'name');
console.log(`Your name is ${name}`);