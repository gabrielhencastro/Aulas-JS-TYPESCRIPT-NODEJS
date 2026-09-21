const orders = [
    {
        id: 420,
        customer: "Gabriel",
        food: "Cheeseburger",
        drink: "Bepsi"
    },
    {
        id: 421,
        customer: "Pietra",
        food: "Hotdog",
        drink: "Orange Juice"
    },
    {
        id: 422,
        customer: "Rose",
        food: "Hotdog",
        drink: "Grape Juice"
    },
]

// Combine filter with map
orders.filter(order => order.food == "Hotdog").map((element, index) => {
    console.log(element)
})