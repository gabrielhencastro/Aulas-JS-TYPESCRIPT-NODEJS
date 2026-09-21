"use strict"

const container = document.querySelector(".container")

const newParagraph = document.createElement("p")
newParagraph.innerText = "New paragraph"

container.before(newParagraph)
container.after(newParagraph.cloneNode(true))

// when we use .before or .after with same element,
// what the DOM does is basically move its position

// if you want to use both with the same element
// you may have to clone the element using .cloneNode()