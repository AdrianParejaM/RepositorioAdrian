"use strict";

//Almacenamos los puntos de los equipos de Juan y Miguel.

var equipoJuan = [89, 120, 103];

var equipoMiguel = [116, 94, 123];

//Función para calcular la media de los puntos.

function mediaPuntos (equipo1) {

    let acumulador = 0;

    for (let i = 0; i < equipo1.length; index++) {
        acumulador = equipo1[index];
        
    }

    return acumulador / equipo1.length;

}

console.log(mediaPuntos(equipoJuan));
