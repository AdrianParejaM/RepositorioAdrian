"use strict";

//Creamos la función para sumar los números introducidos por el usuario.

function sumarNumeros() {

    //Comprobamos si son más de 2 números.
    if (arguments.length < 2) {

        console.log("ERROR. Debes ingresar más de 2 números.");
        return;

    }

    //Ahora comprobamos si lo que ha introducido el usuario son números.
    for (let i = 0; i < arguments.length; i++) {
        
        if (isNaN(arguments[i])) {

            console.log(`ERROR. El valor ${arguments[i]} no es un número válido.`);
            return;
            
        }
        
    }

        //Si todo está correcto entramos en el "for" y hacemos la suma de todos los números.

        //Antes de entrar al for creamos la variable contador.
        let contador = 0;
        for (let i = 0; i < arguments.length; i++) {

            contador += arguments[i];
            
        }

        console.log(`La suma total es ${contador}`);

}

//Hacemos pruebas.

//Prueba para que de error con el hola.
console.log(sumarNumeros(2, 3, "hola", 4));  

//Prueba correcta.
console.log(sumarNumeros(5, 5, 3, 2));

//Prueba para que de error ya que es menos de 2 números.
console.log(sumarNumeros(5));