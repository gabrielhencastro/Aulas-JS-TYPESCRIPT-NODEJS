"use strict"

// DOM [MAIN]
// FRARGMENTDOM [OUTSIDE THE DOM (BETTER PERFORMANCE)]

const ul = document.querySelector("ul")
const fragment = document.createDocumentFragment()

const hamburgers = ["Hamburger 1", "Hamburger 2", "Hamburger 3", "Hamburger 4"]

hamburgers.forEach((element) => {
    const li = document.createElement("li")
    li.innerText = element
    fragment.appendChild(li)
})

ul.appendChild(fragment)