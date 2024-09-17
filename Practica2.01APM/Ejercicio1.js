"use strict";

//La siguiente función calcula el IMC.

function calcularImc (masa, altura) {

    return masa / (altura * altura);
}

//Asignamos a cada persona su masa y su alura.

let Marcos = calcularImc(68, 174);

let Juan = calcularImc(89, 180);

//Creamos una funcion para ver cuál es mayor que el otro.

function unoMayorQueOtro (persona1, persona2) {

    if (persona1 > persona2) {

        return true;
        
    } else {

        return false;
        
    }

}

//Mostramos el mensaje en la consola.

console.log(`¿Tiene Marcos un IMC mayor que el de Juan?: ` + unoMayorQueOtro(Marcos, Juan));