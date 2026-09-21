/*
    shift = remove and returns the first element of an array
    shift = remove and returns the last element of an array
    slice = returns data between a range of index
    splice = remove data between a range of index
*/

let arr = [1, 2, 3, 4, 5]

myPop = arr.pop()
myShift = arr.shift()

console.log(`POP: ${myPop}, SHIFT: ${myShift}`)

arr = [
    {nome: "Gabriel", tel: "(99) 99999-9999"},
    {nome: "Mozinho", tel: "(99) 99999-9999"},
    {nome: "Amigo 1", tel: "(99) 99999-9999"},
    {nome: "Amigo 2", tel: "(99) 99999-9999"},
    {nome: "Amigo 3", tel: "(99) 99999-9999"},
]

mySlice = arr.slice(0, 2) // return the first 2 elements
console.log("-- SLICE:")
console.table(mySlice)

mySplice = arr.splice(2) // return all elements, starting at the index 2
console.log("-- SPLICE:")
console.table(mySplice)

console.log("-- Final Array:")
console.table(arr)