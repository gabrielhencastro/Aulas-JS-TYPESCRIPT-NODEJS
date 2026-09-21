let myArray = [1,2,3,4,5]

console.log(myArray)
console.log(...myArray)

console.log(Math.max(myArray)) // NaN, because MAX expect a number
console.log(Math.max(...myArray))