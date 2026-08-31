// Hoisting is the default behavior of moving all declaration to the top of the code before execution.
// Be careful though, only function declarations are hoisted, not function expressions.

// Example of function declaration
console.log(test())

function test() {
    myTest = "teste" // this will also be moved to the global scope, due to hoisting behavior
    return 1 + 1;
}

// Example of function expression (ERROR)
console.log(test2())
const test2 = () => {
    return 1 + 1;
}
