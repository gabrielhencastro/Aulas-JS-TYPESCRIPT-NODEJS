"use strict"

const h1 = document.querySelector("h1")

h1.classList.add("active", "other")
h1.classList.remove("other")

h1.classList.add("teste")
h1.classList.toggle("teste") // active or disable the class

if(h1.classList.contains("teste"))
{
    alert("Possui classe teste")
}