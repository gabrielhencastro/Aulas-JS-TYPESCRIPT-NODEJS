// Basic structure:
// if (condition) {
//   // code if the condition is true
// } else {
//   // code if the condition is false
// }

// Example 1: checking age
const age = 18;

if (age >= 18) {
  // Since 18 >= 18, the condition is true.
  console.log('You are of legal age.');
} else {
  // This block only runs if the condition is false.
  console.log('You are underage.');
}

// Example 2: if without else
const grade = 80;

if (grade >= 70) {
  // The condition is true, so this block runs.
  console.log('You passed!');
}

// Example 3: else if for multiple conditions
const temperature = 28;

if (temperature < 0) {
  console.log('It\'s freezing!');
} else if (temperature < 20) {
  console.log('It\'s cold.');
} else if (temperature < 30) {
  console.log('It\'s pleasant.');
} else {
  console.log('It\'s very hot!');
}

// Example 4: with boolean
const isUserLoggedIn = true;

if (isUserLoggedIn) {
  // If the value is true, the condition is true.
  console.log('Welcome back!');
} else {
  console.log('Please log in.');
}

// Example 5: comparing values
const number = 10;

if (number === 10) {
  // === checks if the value is equal and of the same type.
  console.log('The number is exactly 10.');
} else {
  console.log('The number is not 10.');
}

// Example 6: comparison operators
const x = 8;

if (x > 5) {
  console.log('x is greater than 5');
} else {
  console.log('x is not greater than 5');
}

// Useful operators:
// >   greater than
// <   less than
// >=  greater than or equal to
// <=  less than or equal to
// ==  equal in value (not recommended)
// === equal in value and type
// !=  different in value
// !== different in value or type

// Important notes:
// - The if condition must result in true or false.
// - Only one block will be executed: the true one or the false one.
// - else if allows testing multiple conditions in sequence.
// - else is optional.

// Practical example: greetings with time of day
const hour = 18;

if (hour < 12) {
  console.log('Good morning!');
} else if (hour < 18) {
  console.log('Good afternoon!');
} else {
  console.log('Good evening!');
}

// Summary:
// if/else is used when the program needs to choose between different paths.
// This makes the code smarter and more dynamic.
// In other words, JavaScript decides what to do based on a condition.
