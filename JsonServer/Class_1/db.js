// /* document.addEventListener("DOMContentLoaded", ()=>{
//     fetch("",{

import { URL_USER } from "./data/route.js"
import { get, post } from "./services/fetchPetition.js"

        
//     })
// })

//  */

// // localStorage (Almacenamiento LOCAL en Navegador, sera permanente siempre y 
// // cuando no lo borre o desinstale el programa)

// const numero = 12
// const lista = ["hola", true,3]
// const objeto = {
//     "name" : "Antony",
//     1: "hola",
//     "clan": {
//         "name" : "bezos",
//         "id": "ASDas"
//     }
// }

// /* Insertar */
// // Guardar nueva informacion o editarla
// // localStorage.setItem( "key", "value")

// localStorage.setItem("name","Antony")
// localStorage.setItem("lastName","Martinezsds")
// localStorage.setItem("lastName","Martinez")

// localStorage.setItem("numero", numero)
// localStorage.setItem("lista", lista)
// localStorage.setItem("objeto", JSON.stringify(objeto))

// /* Obtener */
// // localStorage.getItem("key")

// // console.log(localStorage.getItem("name"))

// const nombre = localStorage.getItem("name")
// let objetoLS = localStorage.getItem("objeto")
// objetoLS = JSON.parse(objetoLS)

// console.log(objetoLS[1]);

// console.log(JSON.parse(`
//     [12, 12]
// `));

// console.log(nombre);

// /* Eliminar */

// localStorage.removeItem("name")
// // localStorage.clear()


// sessionStorage



const form = document.querySelector(".formulario")
const titleInput = document.getElementById("inputTitle")
const title = document.querySelector(".title")


form.addEventListener("submit", ()=>{
    
    const info = titleInput.value

    post(URL_USER, {
        "name": info
    })
    // localStorage.setItem("title", info)

})

document.addEventListener("DOMContentLoaded", async ()=>{
    // const titleLS = localStorage.getItem("title")

    const titleLS = await get(URL_USER);

    if (titleLS) {
        title.textContent = titleLS[0]["name"]
    }

})
 
