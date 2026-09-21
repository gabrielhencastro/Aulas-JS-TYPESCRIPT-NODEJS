"use strict"

const ul = document.querySelector("#colors")
const body = document.querySelector("body")

ul?.addEventListener('click', (event) => {
    const {target} = event // gets the same as event.target
    
    switch(target.className) {
        case "white":
            body.style.background = "white";
            break;

        case "blue":
            body.style.background = "blue";
            break;
        
        case "green":
            body.style.background = "green";
            break;
    }
})
