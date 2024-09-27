"use strict";

//Importamos todo lo necesario para este ejercicio.
import {pasarMayusculas} from "./Biblioteca/funcionesCuartaPractica.js";

//Creamos el array con los 5 nombres.
let nombres = ["Adrián Pareja", "Antonio Recio", "Vicente Maroto", "Fermín Trujillo", "Amador Rivas"];

//Se muestran todos los nombres en mayúscula.
console.log(nombres.map(pasarMayusculas));

//Se muestran los nombres ordenados alfabeticamente al revés.
console.log(nombres.sort().reverse());

//Se muestra la posición y el nombre.