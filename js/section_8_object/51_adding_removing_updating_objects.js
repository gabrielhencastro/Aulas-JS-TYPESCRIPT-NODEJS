let Tenis = {
    size: 10,
    avaliable: false,
}

// Update
Tenis.size = 15
console.log(Tenis.size)

// Insert
Tenis.price = 42
console.log(Tenis.price)

Tenis["brand"] = "Nike"
console.log(Tenis.brand)

// Delete
delete Tenis.brand
console.log(Tenis)