"use strict"

const button = document.querySelector("button")
const body = document.querySelector("body")

// level 0
// button.onclick = () => alert(123)

// level 2
function alertDialog(){
    alert("This dialog shows once")
    // removing the event
    button.removeEventListener("click", alertDialog)
}
button.addEventListener("click", alertDialog)

// adding events
button.addEventListener("mouseover", () => body.style.background = "red")
button.addEventListener("mouseleave", () => body.style.background = "white")
