let myArray = ['hi', 'gabriel']
let secondArray = ['hello', 'pietra']

let bothArrays1 = [...myArray, ...secondArray]
let bothArrays2 = myArray.concat(secondArray)
console.log(bothArrays1)
console.log(bothArrays2)

let [hi, gabriel] = myArray
console.log(hi, gabriel)
