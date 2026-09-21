const orders = [
    {
        id: 420,
        customer: "Gabriel",
        food: "Cheeseburger",
        drink: "Juice",
        price: 100
    },
    {
        id: 421,
        customer: "Pietra",
        food: "Hotdog",
        drink: "Grape Juice",
        price: 50,
    },
    {
        id: 422,
        customer: "Rose",
        food: "Hotdog",
        drink: "Orange Juice",
        price: 60
    },
]

// Condense all values in one
// const finalPrice = orders.reduce((total, element) => total + element.price, initalValue = 0)
const finalPrice = orders.reduce((total, element) => total + element.price, 0)
console.log(finalPrice)