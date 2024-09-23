"use strict";

//Creamos la función para sumar los números introducidos por el usuario.

function sumarNumeros() {

    //Comprobamos si son números.
    if (!isNaN(arguments) || arguments.length <= 2) {

        //Si es así entramos en el "for".

        //Antes de entrar al for creamos la variable contador.
        contador = 0;
        for (let i = 0; i < arguments.length; i++) {

            contador += arguments[i];
            
        }

        console.log(`La suma total es ${contador}`);
        
    } else {

        //Si no son números o son menos de 2 números, salta el mensaje de error.
        console.log("Error, pon sólo números y más de 2.");
        
    }

}

//Hacemos pruebas.

console.log(sumarNumeros(2, 3, "hola", 4));  
console.log(sumarNumeros(5, 5, 3, 2));