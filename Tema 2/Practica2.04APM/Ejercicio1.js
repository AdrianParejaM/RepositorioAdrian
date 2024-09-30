"use strict";

//Importamos todo lo necesario para este ejercicio.
import {nombres, pasarMayusculas, nombresConId} from "./Biblioteca/funcionesCuartaPractica.js";

//Se muestran todos los nombres en mayúscula.
console.log(nombres.map(pasarMayusculas));

//Se muestran los nombres ordenados alfabeticamente al revés.
console.log(nombres.sort().reverse());

//Se muestra la posición y el nombre.
console.log(nombresConId);