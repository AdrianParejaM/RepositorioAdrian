"use strict";

//Función para generar número aleatorio del 1 al 100.
function generarNumeroAleatorio() {
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    return numeroAleatorio;
}

//Exportamos todo.
export {generarNumeroAleatorio};