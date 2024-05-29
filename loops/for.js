/* 
    for (iterator ; condition ; step) {
        // code to execute in iteration
    }

    iterator: Se ejecuta una sola vez al principio del bucle. Generalemte se inicializa una variable de control.
    condition: Se evalúa antes de cada iteración. Si es "true", continúa; si es "false", se detiene.
    step: Se ejecuta al final de cada iteración, generalmente para actualizar la variable de control.

*/

/* 1. Contar de 0 a 4 */

for ( i=0 ; i < 5 ; i++) {
    /* console.log(i); */
}

/* 2. Contar de 3 a 0 */

for (let i=3 ; i>= 0 ; i--) {
    /* console.log(i); */
}

/* 3. Tabla de multiplicar de 12 */

/* let num = prompt("¿De numero quieres tabla?") */
/* num = Number(num); */

/* result = "Tabla de "+num+"\n";

for (let i=1 ; i<11 ; i++) {
    result += ` ${num} x ${i} = ${num*i} \n`
}
 */
/* alert(result) */
/* 4. Recorrer un lista(of) o objetos(in) */

const lista = [1,2,4];

const objeto = {
    "name": "antony",
    "lastname": "ruiz"
}

for (  numero of lista ) {
    console.log(numero);
}

for (  datos in objeto ) {
    console.log(objeto[datos]);
}