"use strict"

const link = document.querySelector("a")

// remove the default behavior of the tag, in this case, prevents from opening the link
link.addEventListener("click", (event) => event.preventDefault())