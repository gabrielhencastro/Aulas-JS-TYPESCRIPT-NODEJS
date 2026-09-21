"use strict"

const form = document.forms.namedItem("registration")

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const name = form.name.value
    const password = form.password.value

    const formData = new FormData(form)

    // formData.forEach(res => console.log(res))
    if(name)
        console.log(formData.get("name"))
    else
        formData.set("name", "default name")

    console.log(formData.get("name"))

    formData.delete("name")
    console.log(formData.has("name"))
    
    // if(name && password){
    //     console.log(name, password)
    //     form.submit()
    // }
})