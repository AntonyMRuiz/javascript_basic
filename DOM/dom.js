// TagName (etiqueta)
const div = document.getElementsByTagName("div") // todas las coincidencias
const div3 = document.querySelector('div')
const p = document.querySelector('p')

// ClassName (clase)
const divHijo = document.getElementsByClassName("hijo") // todas las coincidencias
const divPapa = document.querySelector(".papa")

// Id (id)
const div1 = document.getElementById("uno")
const div2 = document.querySelector("#dos")

p.style = "color: blue; font-size: 100px"

const h1 = document.createElement("h1")
h1.textContent = "HOLA MUNDO"

document.body.prepend(h1)
h1.classList.add("title")
h1.setAttribute("data-color","red")

/* h1.addEventListener("click", ()=>{

    if (h1.getAttribute("data-color") == "red") {
        h1.style = "color: blue"
        h1.setAttribute("data-color","blue")
    } else {
        h1.style = "color: red"
        h1.setAttribute("data-color","red")
    }
}) */

h1.addEventListener("click", ()=>{
    h1.classList.toggle("change")
})

document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault()
})