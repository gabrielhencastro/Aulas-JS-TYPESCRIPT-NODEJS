"use strict"

// const myUl = new DocumentFragment()
const myContainer = document.querySelector(".container")
const myUl = document.querySelector("ul")
const fragment = document.createDocumentFragment()

const myProducts = ["banana", "tomato", "rice"]

myProducts.forEach(element => {
    const myLi = document.createElement("li")
    myLi.innerText = element
    fragment.append(myLi)
})

myUl.append(fragment)