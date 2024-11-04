"use strict";

//Importamos todo lo necesario para este ejercicio.
import {crearPizarra} from "./Biblioteca.js";

document.addEventListener("DOMContentLoaded", () => {

    //Aquí dentro va todo el ejercicio.

    // Seleccionamos los elementos que vamos a usar.
    const todosColores = document.getElementById("todosColores");
    const colorSeleccionado = document.getElementById("colorSeleccionado");
    const pizarra = document.getElementById("pizarraPintar");
    const botonBorrar = document.getElementById("borrar");

    //Generamos la pizarra.
    crearPizarra(pizarra);

    // Evento para seleccionar un color de la paleta.
    for (let i = 0; i < todosColores.length; i++) {
        todosColores[i].addEventListener("click", () => {
            colorActual = todosColores[i].className;
            colorSeleccionado.style.backgroundColor = colorActual;
            pintando = true; 
        });
    }

    // Manejar el clic en la pizarra.
    pizarra.addEventListener("click", (evento) => {
        const celda = evento.target;
        if (celda.tagName === "TD") {
            if (pintando) {
                celda.style.backgroundColor = colorActual
            }
        }
    });

    // Evento para borrar la pizarra.
    botonBorrar.addEventListener("click", (evento) => {
        const celdas = pizarra.querySelectorAll("td");
        celdas.forEach((celda) => {
            celda.style.backgroundColor = "";
        });
    }, false);

    



    


    //FIN DE DOMContentLoaded.
});