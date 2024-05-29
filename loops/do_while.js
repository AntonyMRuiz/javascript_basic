/*     
    do {
        // code to execute
    } while (condition);

    no necesitan tener de antemano la condition para hacer la primera iteracion
    la condicion puede generarse dentro de la iteracion obligatoria

*/
/* let num = 0;
do {
    let num = Number(prompt("Dime un numero par: "))
    if(num%2 != 0){
        alert("ese numero no es par")
    } else {
        alert("excelente sabes leer")
    }
} while(num%2 != 0) */

/* Promedio de notas (Lista de notas) */

/* let contador = 0;
let acumulador = 0;

let flag = "yes";

do {
    let num = Number(prompt("Nota: "))

    contador++
    acumulador+= num
    
    flag = prompt("Desea agregar otra nota? (yes/no)")
} while(flag == "yes");

alert(`${acumulador/contador}`) */

/* let flag = "yes";
const listaNotas = []

do {
    let num = Number(prompt("Nota: "))
    listaNotas.push(num)
    flag = prompt("Desea agregar otra nota? (yes/no)")
} while (flag == "yes");

alert(`${listaNotas.reduce((acum, value) => acum + value) / listaNotas.length}`) */

/* Menu que se repita mientras que el usuario no diga que quiere "SALIR" (
    Calculadora con 2 operaciones
    1. sumar 2 numeros
    2. tabla de multiplicar de X del 1-10
    )*/

let menu = "";

do {
    menu = prompt(`
    Opciones: 
        1.sumar. 
        2.multiplicar. 
        3.salir.

    opcion:
    `)

    switch (menu) {
        case "1":
            let num1 = Number(prompt("Ingrese un numero: "))
            let num2 = Number(prompt("Ingrese un numero: "))
            alert(`La suma es ${num1 + num2}`)
            break;

        case "2":
            let num = prompt("¿De numero quieres tabla?")
            num = Number(num);

            result = "Tabla de " + num + "\n";

            for (let i = 1; i < 11; i++) {
                result += ` ${num} x ${i} = ${num * i} \n`
            }

            alert(result)
            break;

        case "3":
            alert("Adios")
            break;

        default :
            alert("opcion invalida");
            break;
    }


} while (menu != "3")
