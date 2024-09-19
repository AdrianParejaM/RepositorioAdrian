"use strict";

//Creamos la función.

function repetirNumeroMultiplicado (vecesRepetido, numeroOriginal) {

    for (let i = 0; i < vecesRepetido; i++) {

        console.log(numeroOriginal);
        numeroOriginal *= 2;
    
    }
}

//Imprimimos nuestra función.

repetirNumeroMultiplicado(4, 6);