"use strict"

const container = document.querySelector(".container")

// const containerChildren = container.children
const containerChildren = Array.from(container.children)
const containerChildNode = container.childNodes
// console.log(containerChildren)
// console.log(containerChildNode)

containerChildren.forEach((element) => console.log(element))

const firstChild = container.firstElementChild
console.log("First child:", firstChild)

const lastChild = container.lastElementChild 
console.log("Last child:", lastChild)
