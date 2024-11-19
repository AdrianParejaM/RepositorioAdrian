"use strict";

//Ejercicio 2.

// Generar un color aleatorio en formato hexadecimal.
function generarColorHexadecimal() {
    var letras = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var color = "#";
    for (var i = 0; i < 6; i++) {
        var indexAleatorio = Math.floor(Math.random() * letras.length);
        color += letras[indexAleatorio];
    }
    return color;
}

//Exportamos todo.
export {generarColorHexadecimal};