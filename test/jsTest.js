var assert = chai.assert;

// simple calculator
// describe('Get Name', function() {
//   it('should get name nelson', function() {
//     assert.equal(getName(), 'nelson');
//   });
// });

// isEmpty
describe('Is empty', function() {
	it('should return true', function() {
		let testObj = {};
		assert.equal(isEmpty(testObj), true);
	}),
	it('should return false', function() {
		let testObj = {
			name: 'nelson'
		};
		assert.equal(isEmpty(testObj), false);
	})
});

// calcSum
describe('Calculate sum of salaries', function() {
	it('should return 0', function() {
		let salary = {};
		assert.equal(calcSum(salary), 0);
	}),
	it('should return 10', function() {
		let salary = {
			a: 5,
			b: 5,
		};
		assert.equal(calcSum(salary), 10);
	});
})

// doubleNumbers
describe('Double numeric values', function() {
	it('should double value to 200', function() {
		let menu = {
			width: 50,
		}
		doubleNumbers(menu)
		assert.equal(menu['width'], 100)
	})
})