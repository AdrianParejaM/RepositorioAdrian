"use strict";

//Vamos a realizar la función 'multiplicar'.

function multiplicar (numeroAMultiplicar) {

    let resultado = 0;

    for (let i = 0; i <= 10; i++) {
        
        resultado = numeroAMultiplicar * i;

        //Imprimimos por pantalla la tabla de multiplicar.
        console.log(`${numeroAMultiplicar} x ${i} = ${resultado}\n`);
        
    }

}

//Creamos la función para poder realizar las tablas de multiplicar que nos pida el usuario.
function tablas (numeroAMultiplicar, funcion) {

    if (numeroAMultiplicar < 2) {

        //Creamos el mensaje por si la tabla que nos da el usuario es menor que la del 2.
        console.log(`ERROR. Ponme otro número, que ese es muy fácil para poder hacerte las tablas!!`);
        
    } else {

        //Creamos el for con la cuenta regresiva para que nos imprima por pantalla las tablas desde el número proporcionado por el usuario hasta el 2.
        for (let i = numeroAMultiplicar; i >= 2; i--) {
            
            console.log(`Tabla del ${i}\n`);
            funcion(i);
            
        }
        
    }

}

//Ejemplo de que cree tabla menor que el 2 para que salga el 'error'
tablas(1, multiplicar);

//Imprimimos por pantalla el ejemplo proporcionado.
tablas(5, multiplicar); 
