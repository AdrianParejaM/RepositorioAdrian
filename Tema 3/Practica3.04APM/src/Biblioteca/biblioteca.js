"use strict";

//Ejercicio 1.

//Generar número aleatorio.

function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 1000) + 1;
  }


  //Ejercicio 2.

  // Función para generar un color aleatorio en formato hexadecimal.
function generarColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}



  //Exportamos todo.
export {generarNumeroAleatorio, generarColorAleatorio};