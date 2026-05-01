// app.test.js - Unit tests for our calculator
const { add, subtract, multiply, divide } = require('./app');

// Test the add function
test('add: 2 + 3 equals 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('add: negative numbers work', () => {
  expect(add(-1, -1)).toBe(-2);
});

// Test subtract
test('subtract: 10 - 4 equals 6', () => {
  expect(subtract(10, 4)).toBe(6);
});

// Test multiply
test('multiply: 3 x 4 equals 12', () => {
  expect(multiply(3, 4)).toBe(12);
});

// Test divide
test('divide: 10 / 2 equals 5', () => {
  expect(divide(10, 2)).toBe(5);
});

test('divide: throws error when dividing by zero', () => {
  expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
});
