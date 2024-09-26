"use strict";

//Copiamos lo realizado en los ejercicios anteriores.
function crearCurso (curso, anyo, descripcion){

    return {

        "Curso" : curso,
        "Año" : anyo,
        "Descripción" : descripcion,
        Alumnado: [],
        
    }

}

function informeCompleto (variableInforme) {

    for (let elemento in variableInforme) {

        console.log(`${elemento} : ${variableInforme[elemento]}`);

    }

}

var discente = {

    id: "123456789",
    nombre: "Adrián",
    apellidos: "Pareja Morote",
    aficiones: ["Pádel", "Fifa", "Fútbol"],
    notas : {
        primera: 7,
        segunda: 8,
        tercera: 9,
    },

    calcularMedia: function () {

        let resultado = (discente.notas.primera + discente.notas.segunda + discente.notas.tercera) / 3;
    
        return `La media de las notas es: ${resultado}`;
    
    },

    imprimirAficiones: function (){

        console.log("Las aficiones del discente son: ");
    
        for (let i = 0; i < discente.aficiones.length; i++) {
            
            console.log(discente.aficiones[i]);
            
        }
    
    },

    imprimirInforme: function (){

        for (var clave in discente) {
            if (discente.hasOwnProperty(clave)) {
                
                console.log(`${clave} : ${discente[clave]}.`);
                
            }
        }
    
    }

};

//Comenzamos el ejercicio 4.

function matricularAlumno(curso, discente) {

    curso.Alumnado.push(discente);

}

//Creamos el curso.
let curso1 = console.log(crearCurso("Desarrollo web en entorno cliente", 2024, "Hola, qué tal"));

//Matriculamos al discente.
matricularAlumno(curso1, discente);

//Lo mostramos en la consola.
informeCompleto(curso1);
