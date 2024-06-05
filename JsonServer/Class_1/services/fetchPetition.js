/* GET */
export async function get(URL){
    const response = await fetch(URL);
    return await response.json();
}

/* POST */
export function post(URL, data){
    fetch( URL , {
        method : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body : JSON.stringify(data)
    })
}

/* UPDATE */
function put(){

}

/* DELETE */
function deleted(){

}
