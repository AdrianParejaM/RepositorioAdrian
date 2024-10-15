"use strict";

//Importamos todo lo necesario para este ejercicio.
import {crearTabla, resaltarPrimos} from "../biblioteca/biblioteca.js";

//Creamos la tabla.
crearTabla();

//Establecemos que a los 2 segundos se resalten los números primos.
setTimeout(()=>{ 

    resaltarPrimos();

 }, 2000);