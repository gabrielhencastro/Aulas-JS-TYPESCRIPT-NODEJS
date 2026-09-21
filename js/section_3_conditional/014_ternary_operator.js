// A ternary operator is a simple form of a conditional statement that evaluates a condition and returns one of two values based on whether the condition is true or false.
// It is often used as a shorthand for an if-else statement.

// The syntax of a ternary operator is as follows:
// condition ? value_if_true : value_if_false

const speed = 75
const warn  = 85

const isAboveSpeed = speed > warn ? 'You are above the speed limit!' : 'You are within the speed limit.'

console.log(isAboveSpeed)