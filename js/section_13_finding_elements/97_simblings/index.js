"use strict"

const h1 = document.querySelector("h1")

console.log(h1.nextElementSibling)
console.log(h1.previousElementSibling) // doesnt have
console.log(h1.nextElementSibling.previousElementSibling) // h1