/* Contiene todo la logica de peticiones
    a la base de datos (.json) */

/* Funcion para obtener de un endpoint */
export async function get(URL) {

    const response = await fetch(URL);
    return await response.json();

}

/* Funcion para enviar a un endpoint */
export async function post(URL, data) {

    await fetch(URL, {
        method : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body : JSON.stringify(data)
    })
}

/* Funcion para eliminar UN registro, CUIDADO CON LA URL */
export async function deleteById(URL, id) {
    await fetch(`${URL}/${id}`,{
        method : "DELETE"
    })
}

/* Funcion para editar un registro en un endpoint */
export async function putById(URL, id, data) {
    await fetch(`${URL}/${id}`,{
        method : "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body : JSON.stringify(data)
    });
}