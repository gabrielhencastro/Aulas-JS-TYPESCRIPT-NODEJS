// You have to be careful while cloning objects in JS, because every clone is a reference to it's parent,
// and in some cases it might change both

let Tenis = {
    size: 10,
    avaliable: false,
}

let brand = {
    "name": "Nike",
    "year": 2016
}

let TenisClone = Tenis
console.log(TenisClone)

let assign1 = Object.assign(Tenis, brand)
console.log(assign1)

let assign2 = {...Tenis, ...brand}
console.log(assign2)

// it also works with array

let myArray = ['hi', 'gabriel']
let secondArray = ['hello', 'pietra']

let bothArrays1 = [...myArray, ...secondArray]
let bothArrays2 = myArray.concat(secondArray)
console.log(bothArrays1)
console.log(bothArrays2)

let [hi, gabriel] = myArray
console.log(hi, gabriel)

