"use strict";

function generarNumeroAleatorio() {
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    return numeroAleatorio;
}

//Exportamos todo.
export {generarNumeroAleatorio};