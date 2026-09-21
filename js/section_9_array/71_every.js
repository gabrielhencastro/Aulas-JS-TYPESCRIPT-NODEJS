const orders = [
    {
        id: 420,
        customer: "Gabriel",
        food: "Cheeseburger",
        drink: "Juice"
    },
    {
        id: 421,
        customer: "Pietra",
        food: "Hotdog",
        drink: "Juice"
    },
    {
        id: 422,
        customer: "Rose",
        food: "Hotdog",
        drink: "Juice"
    },
]

// Return a boolean if all elements are the same
myOrder = orders.every((element, index) => element.drink == "Juice")
console.log(myOrder)