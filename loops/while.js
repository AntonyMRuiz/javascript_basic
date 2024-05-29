/*    

    condition = true (5>2);

   while (condition) {
        // code to execute while the condition is true
    }

    La condicion debe exister necesariamente desde antes de empezar y ser "true" para ejecutar

*/

/* Pedir un numero par, y no parar hasta que se cumpla esa condicion */

let num = Number(prompt("Dime un numero par: "))

while (num%2 != 0) {
    alert("ese numero no es par")
    num = Number(prompt("Dime un numero par: "))
}

