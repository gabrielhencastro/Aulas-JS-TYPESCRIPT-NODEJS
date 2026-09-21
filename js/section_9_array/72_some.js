const orders = [
    {
        id: 420,
        customer: "Gabriel",
        food: "Cheeseburger",
        drink: "Soda"
    },
    {
        id: 421,
        customer: "Pietra",
        food: "Hotdog",
        drink: "Soda"
    },
    {
        id: 422,
        customer: "Rose",
        food: "Hotdog",
        drink: "Juice"
    },
]

// Return a boolean if have one element
myOrder = orders.some((element, index) => element.drink == "Juice")
console.log(myOrder)