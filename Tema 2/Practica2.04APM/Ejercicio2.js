"use strict";

//Importamos todo lo necesario para este ejercicio.
import {generarArrayAleatorio, mostrarNumerosMayorCinco} from "./Biblioteca/funcionesCuartaPractica.js";

// Generamos los tres arrays aleatorios.
let arrayAleatorio1 = generarArrayAleatorio();
let arrayAleatorio2 = generarArrayAleatorio();
let arrayAleatorio3 = generarArrayAleatorio();

//Imprimimos todos los arrays.
console.log(`Imprimimos los arrays para verlos y que no se escape ningún número: 
Array 1: ${arrayAleatorio1}\nArray 2: ${arrayAleatorio2}\nArray 3: ${arrayAleatorio3}`);

//Imprimimos los mayores a 5.
let numerosMayoresCinco = mostrarNumerosMayorCinco(arrayAleatorio1, arrayAleatorio2, arrayAleatorio3);
console.log(`Los números mayores a 5 son: \n${numerosMayoresCinco}.`)