// Switch is a control flow statement that allows a variable to be tested for equality against a list of values. Each value is called a case, and the variable being switched on is checked for each case.

// The syntax of a switch statement is as follows:
// switch (expression) {
//   case value1: 
//     // code to be executed if expression === value1
//     break;
//   case value2: 
//     // code to be executed if expression === value2
//   break;
//  ...

const month = 3;

switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    // ... more cases
}