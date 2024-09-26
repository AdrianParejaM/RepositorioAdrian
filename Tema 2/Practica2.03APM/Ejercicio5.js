"use strict";

//Ejercicios anteriores.
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

//Empezamos el ejercicio 5.

function imprimirObjeto(discente) {

    for (const clave in discente) {
        if (discente.hasOwnProperty(clave)) {

            let valor = discente[clave];
            let tipo = typeof valor;

            //Si es un array imprime lo siguiente.
            if (Array.isArray(valor)) {

                console.log(`${clave} (Array): ${valor}`);
            
            //Si es un objeto imprime lo siguiente.
            } else if (tipo === 'object'){

                console.log(`${clave} (Objeto): `);
                //Esto no lo he conseguido sacar yo solo, he intentado varias formas y al final le pedí ayuda al chat.
                for (let subClave in valor) {
                    
                    console.log(` ${subClave} ${valor[subClave]}`);
                }
            //Si es una función imprime lo siguiente.    
            } else if (tipo === 'function'){

                //Aquí he hecho que no imprima la función ya que si se quiere imprimir con la función imprimirInforme lo hace
                //por lo tanto aquí solo indico que es una función y nada más.
                console.log(`${clave} (Función)`);
            
            //Es el método default para los demás tipos.
            } else{

                console.log(`${clave} (${tipo}): ${valor}`);

            }
            
        }
    }

}

//Hacemos la impresión del discente.
imprimirObjeto(discente);