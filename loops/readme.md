Dentro de los bucles hay palabras reservadas que controlan el flujo de la ejecución.
Las más comunes son "break" y "continue":

"break"
    Se utiliza para salir de un bucle antes de que haya terminado normalmente. 
    Cuando se ejecuta una declaración break, el bucle se interrumpe inmediatamente 
    y continua con lo que este despues del bucle.

    Ejemplos:

        for (let i = 1; i < 5; i++) {
            break; // Sale desde la primera iteracion (omite el codigo que este dentro del bucle pero debajo de el)
            
            if (i > 2) {
                break; 
            }
            console.log(i);
        }

        condition = 1;

        while (condition < 4) {
            
            if (condition > 2) {
                break; 
            }

            console.log(condition); // Salida: 1
            
            condition++;

            break; // Sale desde la primera iteracion (realiza todo el codigo que este por encima de el)
                   // (omite el codigo que este dentro del bucle pero debajo de el)
        }
        
        for (let i = 0; i < 10; i++) {
            console.log(i); // Salida: 0, 1, 2, 3

            if (i === 2) {
                break; // Sale cuando i sea mayor a 2
            }

            console.log(i); // Salida: 0, 1, 2
        }


"continue"
    Se utiliza para omitir el resto del código en la iteración actual del bucle y pasar a la siguiente iteración. No sale del bucle, solo salta a la siguiente iteración.

    Ejemplos:

        for (let i = 12; i < 20; i++) {
            continue; // Salta todas la iteracion (realiza todo el codigo que este por encima de el)
                      // (omite el codigo que este dentro del bucle pero debajo de el)

            if (i == 5) {
                continue; 
            }

            console.log(i);
        }


        for (let i = 5; i > 0; i--) {
            if (i == 3) {
                continue; // Salta la iteración cuando i es igual a 3 
                          // (realiza todo el codigo que este por encima de el)
                          // (omite el codigo que este dentro del bucle pero debajo de el)
            }
            console.log(i);  // Salida: 5, 4, 2, 1
        }

Etiqueta "label" (Investigar)
    Permiten nombrar bucles y bloques de código. 
    Se pueden usar junto con break y continue para controlar el flujo de bucles anidados de manera más precisa.


