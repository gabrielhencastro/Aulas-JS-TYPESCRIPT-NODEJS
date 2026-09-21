"use strict"

const p = document.querySelectorAll("p")

console.log(p)

p.forEach((element, index) => {
    if(index == 0){
        element.style.background = "red"
    }
    else {
        element.style.background = "blue"
    }
})