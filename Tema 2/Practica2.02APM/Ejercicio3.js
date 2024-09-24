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

    return arrayRandom;

}

//Creamos la función para que sume los 2 arrays recibidos.
function sumaDosArrays(arrayASumar1, arrayASumar2){

    let resultadoSuma = [];

    for (let i = 0; i < arrayASumar1.length; i++) {
        
        //Sumamos la primera posición del primer array a la última posición del segundo array.
        resultadoSuma[i] = arrayASumar1[i] + arrayASumar2[arrayASumar2.length - 1 - i];

    }

    return resultadoSuma;
    
}

//Creamos la función para imprimir el array.

function imprimirArray(array) {

    let resultado = "El array es: ";

    for (let i = 0; i < array.length; i++) {
        
        resultado += `${array[i]} `;
        
    }

    console.log(resultado);

}

//Hacemos la función calcular.
function calcular(funcion1, funcion2, funcion3) {

    //Genera 2 arrays con 4 números aleatorios.
    let arrayPrueba1 = funcion1(4);
    let arrayPrueba2 = funcion1(4);

    //Suma los 2 arrays.
    let arrayPruebaSuma = funcion2(arrayPrueba1, arrayPrueba2);

    //Imprimimos el array con su función;
    funcion3(arrayPrueba1);
    funcion3(arrayPrueba2);
    funcion3(arrayPruebaSuma);

}

//Llamamos a la función calcular.

calcular(generarArrayRandom, sumaDosArrays, imprimirArray);



