"use strict"

const form = document.forms.namedItem("registration")

form.addEventListener('input', (event) => {
    event.preventDefault()

    const name = form.name.value
    if(name){
        const div = document.createElement('div')
        div.innerText = name.toUpperCase()

        form.nextElementSibling.remove()
        form.after(div)
    }
})