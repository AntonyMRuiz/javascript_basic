import { URL_USERS } from "../services/routes.js";
import { deleteById, get, post, putById } from "../services/services.js";

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const form = document.querySelector("form");
/* Forma buscando desde el padre */
const tableUser = document.querySelector(".tableUser");
const tableBody = tableUser.querySelector("tbody")
/* Buscado el elmento en concreto */
const contentTable = document.querySelector(".contentTable");
const btnAdd = document.querySelector(".btnAdd");
const modalTitle = document.querySelector(".modal-title");

document.addEventListener("DOMContentLoaded", paintUsers)

form.addEventListener("submit", (event) => {
    event.preventDefault();
    insert();
})

btnAdd.addEventListener("click", ()=>{
    form.reset();
    form.setAttribute("data-status","add");
    modalTitle.textContent = "AGREGANDO UN NUEVO USUARIO"
})

function insert() {

    const name = nameInput.value;
    const age = ageInput.value;

    if (empty(name) || !isAge(age)) {
        return;
    }

    const data = { name, age }

    /* 
    data = {
        "name" : nameInput.value,
        "age" : ageInput.value
    }
    */

    if (form.getAttribute("data-status") == "add") {
        post(URL_USERS, data);
    } else if (form.getAttribute("data-status") == "edit"){
        putById(URL_USERS, form.getAttribute("data-id") , data);
    }
    
    form.reset();
    paintUsers();

}

function empty(valor) {

    /* s para buscar un espacio vacio o un enter */

    if (/^\s/.test(valor)) {
        alert("El nombre no debe contener espacios")
        return true;
    }
    return false;
}

function isAge(age) {
    if (age > 0 && age < 110) {
        return true;
    } else if (age > 110) {
        alert("No creo que seas real o un humano")
    } else {
        alert("Edad invalida")
    }
    return false;
}

async function paintUsers() {

    /* Informacion que devuelve la DB */

    const users = await get(URL_USERS);

    users.forEach((user) => {
        /* Forma larga pero sin posibles errores */
        const tr = document.createElement("tr");
        const tdId = document.createElement("td");
        const tdName = document.createElement("td");
        const tdAge = document.createElement("td");
        const tdActions = document.createElement("td");
        const btnDelete = document.createElement("button");
        const btnEdit = document.createElement("button");

        btnDelete.classList = "btn btn-danger me-3";
        btnEdit.classList = "btn btn-warning";

        btnEdit.setAttribute("data-bs-toggle", "modal")
        btnEdit.setAttribute("data-bs-target", "#exampleModal")

        btnDelete.textContent = "Delete";
        btnEdit.textContent = "Edit";
        tdId.textContent = user["id"];
        tdName.textContent = user["name"];
        tdAge.textContent = user["age"];

        tdActions.append(btnDelete, btnEdit);
        tr.append(tdId, tdName, tdAge, tdActions);

        btnDelete.addEventListener("click", () => {
            deleteById(URL_USERS, user["id"])
        })

        btnEdit.addEventListener("click", ()=>{
            form.setAttribute("data-status","edit");
            form.setAttribute("data-id",user["id"]);
            modalTitle.textContent = "EDITANDO USUARIO";

            nameInput.value = user["name"];
            ageInput.value = user["age"];
        })

        contentTable.appendChild(tr);
    });

    /* Forma corta pero con posibles errores */
    /* users.forEach((user)=>{
        contentTable.innerHTML += `
        <!-- tr: es la fila -->
                    <tr>
                        <!-- td: columnas de la fila -->
                        <td>${user["id"]}</td>
                        <td>${user["name"]}</td>
                        <td>${user["age"]}</td>
                    </tr>
        `
    }) */
}