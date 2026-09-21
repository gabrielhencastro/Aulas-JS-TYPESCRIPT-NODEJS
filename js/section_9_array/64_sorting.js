const stringArray = ["a", "z", "e", "d"]
const intArray = [0, 38, 20, 12]

// console.table(intArray.sort()) doesn't work well with numbers
stringArray.sort()
console.log(stringArray)
stringArray.reverse() // O método correto em JS é reverse(), não reserve()
console.log(stringArray)

// If you don't want to mutate the original array, you can use toSorted() and toReversed(),
// which will return a new array without modifying the original one.

// WITH NUMBERS

// sort
console.log(intArray.sort((a, b) => a - b))
// reverse
console.log(intArray.sort((a, b) => a - b).reverse())

// WITH OBJECTS
const objArray = [
    {nome: "Gabriel Henrique"},
    {nome: "Pietra Madalena"},
    {nome: "Náthan Gouveia"},
]

console.table(objArray.sort((a,b) => a.nome.localeCompare(b.nome)))