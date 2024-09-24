"use strict";

//Creamos la función.
function crearCurso (curso, anyo, descripcion){

    return {

        "Curso" : curso,
        "Año" : anyo,
        "Descripción" : descripcion,
        Alumnado: [],
        
    }

}

//Lo probamos.
console.log(crearCurso(2024-25, 2024, "Hola, qué tal"));