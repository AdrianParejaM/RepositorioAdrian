"use strict";

//Copiamos lo realizado en los ejercicios anteriores.
function crearCurso (curso, anyo, descripcion){

    return {

        "Curso" : curso,
        "Año" : anyo,
        "Descripción" : descripcion,
        Alumnado: [],

        matricularAlumno: function(discente) {
            this.Alumnado.push(discente);
            return `El alumno ${discente.nombre} ${discente.apellidos} ha sido matriculado satisfactoriamente`;
    }

}
}

//Función del ejercicio 4.
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

//Creamos otro discente para probar.
var discente2 = {

    id: "987654321",
    nombre: "Antonio",
    apellidos: "Recio Matamoros",
    aficiones: ["Marisco", "Ser presidente de su comunidad"],
    notas : {
        primera: 9,
        segunda: 6,
        tercera: 10,
    }
}

//Creamos el curso.
let curso1 = crearCurso("Desarrollo web en entorno cliente", 2024, "Hola, qué tal");

//Matriculamos a los discentes y los mostramos.
console.log(curso1.matricularAlumno(discente));
console.log(curso1.matricularAlumno(discente2));
