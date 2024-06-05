import { URL_USERS } from "../services/routes.js";
import { get } from "../services/services.js";

const formLogin = document.querySelector(".formLogin");
const emailInput = document.querySelector("#loginEmail");
const passwordInput = document.querySelector("#loginPassword");

formLogin.addEventListener("submit", async (event)=>{
    event.preventDefault();

    const email = emailInput.value;
    validation(email)

})

async function validation(email){
    
    const data = await get(`${URL_USERS}?email=${email}`);

    if (data.length == 0) {
        alert("Credenciales invalidas(email)");
        return;
    }

    if (data[0]["password"] != passwordInput.value) {
        alert("Credenciales invalidas(password)");
        return;
    }

    localStorage.setItem("nameUser",data[0]["name"]);
    window.location.href = "../index.html"

}
