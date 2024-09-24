"use strict";

//Copiamos lo realizado en el ejercicio 1.
function crearCurso (curso, anyo, descripcion){

    return {

        "Curso" : curso,
        "Año" : anyo,
        "Descripción" : descripcion,
        Alumnado: [],
        
    }

}

//Creamos la función que nos pide el enunciado.
function informeCompleto (variableInforme) {

    for (let elemento in variableInforme) {

        console.log(`${elemento} : ${variableInforme[elemento]}`);

    }

}

//Creamos la variable para poder meterla en la función.
let primerEjemplo = crearCurso(2025, 2024, "Hola, qué tal");

//Imprimimos por pantalla.
console.log(informeCompleto(primerEjemplo));