"use strict"

const h1 = document.querySelector("h1")
const classP = document.querySelector(".paragraph")
const idP = document.querySelector("#paragraph")
const link = document.querySelector(".paragraph a")

console.log(h1)
console.log(classP)
console.log(idP)
console.log(link)

let timer = 0
const title = document.querySelector("title")
setInterval(() => {
    title.innerText = timer
    timer++
}, 1000)