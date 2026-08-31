// it solve some of the bugs that happens with cloning
function cloneObject(objectToClone) {
    return JSON.parse(JSON.stringify(objectToClone))
}

let Tenis = {
    size: 10,
    avaliable: false,
}

// let TenisClone = JSON.stringify(Tenis) // convert the object to string
// TenisClone = JSON.parse(TenisClone) // convert the string to object again, creating a new reference
TenisClone = cloneObject(Tenis)
console.log(TenisClone)
