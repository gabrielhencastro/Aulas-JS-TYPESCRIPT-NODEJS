"use strict"

const container = document.querySelector(".container")
const paragraph = container.querySelector(".paragraph")

const newH2 = document.createElement("h2")
newH2.innerText = "New H2"

container.insertBefore(newH2, paragraph)
