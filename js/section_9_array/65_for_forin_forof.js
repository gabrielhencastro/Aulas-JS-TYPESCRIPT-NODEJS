const myArray = ["item 1", "item 2"]

// for
console.log("==== for ====")
for(let i = 0; i < myArray.length; i++)
    console.log(myArray[i])

// for of
console.log("==== for of ====")
for(let item of myArray)
    console.log(item)

const myObject = {name: "Gabriel", surname: "Castro"}

// for in
console.log("==== for in ====")
for(let item in myObject)
    console.log(`${item}: ${myObject[item]}`)
