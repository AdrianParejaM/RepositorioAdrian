"use strict";

//Creamos la función para generar un array aleatorio.
function generarArrayRandom(cantidadNumeros){

    //Creamos el array vacío.
    let arrayRandom = [];

    for (let i = 0; i < cantidadNumeros; i++) {
        
        /*Asignamos a cada posición del array un número random hasta 
        que llegue a la cantidad de numeros indicada por el usuario.*/
        arrayRandom[i] =  Math.floor(Math.random()*101);
        
    }

    /*Comprobación de que generaba los números random.
    console.log(arrayRandom);
    */

}

//Creamos la función para que sume los 2 arrays recibidos.
function sumaDosArrays(arrayASumar1, arrayASumar2){

    
}

generarArrayRandom(8);