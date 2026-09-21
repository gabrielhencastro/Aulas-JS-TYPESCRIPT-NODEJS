const Tenis = {
    size: 10,
    avaliable: false,
    brands: [
        {name:"Adidas"},
        {name:"Nike"}
    ]
}

// hasOwnProperty | propertyName in Tenis

console.log(Tenis.hasOwnProperty("size"))
console.log("size" in Tenis)