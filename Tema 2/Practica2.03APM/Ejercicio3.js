"use strict";

//Creamos el objeto JSON.
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

    //Creamos la función para calcular la media de los 3 trimestres.
    calcularMedia: function (discente) {

        let resultado = (discente.notas.primera + discente.notas.segunda + discente.notas.tercera) / 3;
    
        return `La media de las notas es: ${resultado}`;
    
    },

    //Creamos la función para imprimir las aficiones.
    imprimirAficiones: function (discente){

        console.log("Las aficiones del discente son: ");
    
        for (let i = 0; i < discente.aficiones.length; i++) {
            
            console.log(discente.aficiones[i]);
            
        }
    
    },

    //Creamos la función para que imprima por consola el informe completo.
    imprimirInforme: function (discente){

        for (var clave in discente) {
            if (discente.hasOwnProperty(clave)) {
                
                console.log(`${clave} : ${discente[clave]}.`);
                
            }
        }
    
    }

};

//Probamos la función "calcularMedia".
console.log(discente.calcularMedia(discente));

//Probamos la función "imprimirAficiones".
console.log(discente.imprimirAficiones(discente));

//Probamos la función "imprimirInforme".
console.log(discente.imprimirInforme(discente));