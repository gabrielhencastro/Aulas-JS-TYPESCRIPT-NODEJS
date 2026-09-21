"use strict"

const div = document.querySelector("div");
div.innerHTML += "<a> my link </a>"

const elementUl = document.createElement("ul")

let myArray = [1, 2, 3]
myArray.forEach((element) => {
    const elementLi = document.createElement("li")
    elementLi.innerText = element
    elementUl.appendChild(elementLi)
});

div.appendChild(elementUl)