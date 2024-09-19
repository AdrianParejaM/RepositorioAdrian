"use strict";

//Almacenamos los puntos de los equipos de Juan y Miguel.

let equipoJuan = [89, 120, 103];

let equipoMiguel = [116, 94, 123];

//Añadido posteriormente.

let equipoMaria = [97, 134, 105];

//Función para calcular la media de los puntos.

function mediaPuntos (equipo1) {

    let acumulador = 0;

    for (let i = 0; i < equipo1.length; i++) {
        acumulador += equipo1[i];
        
    }

    return acumulador / equipo1.length;

}

//Función para calcular qué equipo tiene mejor media de puntos (supongo que habrá otra forma de hacerlo y no con tanto else if, pero no lo he conseguido sacar de otra manera).

function mayorMediaPuntos (equipo1, equipo2, equipo3) {

    if (mediaPuntos(equipo1) > mediaPuntos(equipo2) && mediaPuntos(equipo1) > mediaPuntos(equipo3)) {

        return `El equipo con ${equipo1} puntos tiene la mayor media de puntos con ${mediaPuntos(equipo1)}.`;
        
    } else if(mediaPuntos(equipo2) > mediaPuntos(equipo1) && mediaPuntos(equipo2) > mediaPuntos(equipo3)){

        return `El equipo con ${equipo2} puntos tiene la mayor media de puntos con ${mediaPuntos(equipo2)}.`;
        
    }else if(mediaPuntos(equipo3) > mediaPuntos(equipo1) && mediaPuntos(equipo3) > mediaPuntos(equipo2)){

        return `El equipo con ${equipo3} puntos tiene la mayor media de puntos con ${mediaPuntos(equipoMaria)}.`;
        
    }else if(mediaPuntos(equipo1) > mediaPuntos(equipo2) && mediaPuntos(equipo1) == mediaPuntos(equipo3)){

        return `El equipo con ${equipo1} y ${equipo3} puntos estan empatados a la mayor media de puntos con ${mediaPuntos(equipo1)}.`;
        
    }else if(mediaPuntos(equipo1) == mediaPuntos(equipo2) && mediaPuntos(equipo1) > mediaPuntos(equipo3)){

        return `El equipo con ${equipo1} y ${equipo2} puntos estan empatados a la mayor media de puntos con ${mediaPuntos(equipo1)}.`;
        
    }else if(mediaPuntos(equipo2) > mediaPuntos(equipo1) && mediaPuntos(equipo2) == mediaPuntos(equipo3)){

        return `El equipo con ${equipo2} y ${equipo3} puntos estan empatados a la mayor media de puntos con ${mediaPuntos(equipo2)}.`;
        
    }else{

        return `Hay un triple empate en la media de puntos de los equipos con ${mediaPuntos(equipo1)}.`;
        
    }

}

//Imprimimos por pantalla.

console.log(mayorMediaPuntos(equipoJuan, equipoMiguel, equipoMaria))
