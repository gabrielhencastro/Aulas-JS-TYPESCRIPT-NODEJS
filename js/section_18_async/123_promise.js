const order = (pedido) => {
    return new Promise((resolve, reject) => {
        if(pedido.toLowerCase() === "pizza"){
            reject("There is no pizza avaliable in the menu")
        }

        setTimeout(() => {
            resolve(`You order arrived [${pedido}]`)
        }, 5000)
    })
}

order("pizza").then((res) => {
    console.log(res)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log("Order has ended")
})