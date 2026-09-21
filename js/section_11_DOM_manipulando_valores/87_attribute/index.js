"use strict"

const myDiv = document.querySelector("div")


myDiv.setAttribute("class", "active")
myDiv.setAttribute("class", `${myDiv.getAttribute("class")} background-red`)
 
myDiv.removeAttribute("class")

console.log(myDiv)