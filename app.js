// app.js - Simple calculator functions
// These are the functions our tests will test
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

// Bad code to test ESLint rules
var x = 5

// Vulnerable function - intentionally insecure for DevSecOps learning
function getUserById(userId) {
  const query = "SELECT * FROM users WHERE id = " + userId
  return query
}

module.exports = { add, subtract, multiply, divide, getUserById };
