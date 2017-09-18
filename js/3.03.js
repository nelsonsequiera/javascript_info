'use strict';

/**
 * @fileOverview Object methods & this
 */

// object methods
let teacher = {
	name: 'savitha',
	shout() {
		console.log('i want pin drop silence!!!')
	},
	sayName() {
		console.log(`My name is ${this.name}`); 	// this == teacher
	}
}
teacher.shout()
teacher.sayName()

function sayHi() {
	console.log(`${this} wants to say hi`);
}

let studentA = {
	name: 'Nelson',
	sayHi
}
let studentB = {
	name: 'satisha',
	sayHi
}
studentA.sayHi()
studentB.sayHi()
sayHi()


let calculator = {
	read() {
		this.first = +prompt('Enter first value:', 0);
		this.second = +prompt('Enter second value:', 0);
	},
	sum() {
		return this.first + this.second;
	},
	mul() {
		return this.first * this.second;
	}
}

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());


let ladder = {
	step: 0,
	up() {
		this.step += 1;
		return this;
	},
	down() {
		this.step -=1;
		return this;
	},
	showStep() {
		console.log(`current step is ${this.step}`);
	}
}

ladder.up().down().showStep()