const Tenis = {
    size: 10,
    avaliable: false,
    brands: [
        {name:"Adidas"},
        {name:"Nike"}
    ]
}

// ALIAS -> VARIABLE: ALIAS
// EXAMPLE -> brands: allBrands
let {size, avaliable, color = "Dont have any color", brands: allBrands,} = Tenis

// With a parameter like color, we assume that we may not have it in the
// object, and set a default.

// The orders doesn't matter if the variable names are the same

console.log(size, avaliable, allBrands, color)