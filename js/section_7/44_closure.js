/*
  A closure typically occurs when a function
  is declared inside the body of another function, and the inner function
  references local variables of the outer function.
*/

// function whatIsYourName(name){
//     const msg = `O seu nome é:`

//     function yourName(){
//         return `${msg} ${name}`
//     }

//     return yourName();
// }

// console.log(whatIsYourName("gabriel"))

function Calculate(n1, n2){
    const msg = "Result:"

    const sum = () => {
        return `${msg} ${n1 + n2}`
    }

    const subtraction = () => {
        return `${msg} ${n1 - n2}`
    }

    const division = () => {
        return `${msg} ${n1 / n2}`
    }

    const multiplication = () => {
        return `${msg} ${n1 * n2}`
    }

    return {
        sum: sum(),
        subtraction: subtraction(),
        multiplication: multiplication(),
        subtraction: subtraction()
    }
}