"use strict";

//Importamos todo lo necesario para este ejercicio.
import {crearPizarra, resetearTabla, pintarCelda} from "./Biblioteca.js";

document.addEventListener("DOMContentLoaded", () => {

    //Aquí dentro va todo el ejercicio.

    // Seleccionamos los elementos que vamos a usar.
    const todosColores = document.getElementById("todosColores");
    const colorSeleccionado = document.getElementById("colorSeleccionado");
    const pizarra = document.getElementById("pizarraPintar");
    const botonBorrar = document.getElementById("borrar");

    //Generamos la pizarra.
    crearPizarra(pizarra);

    //Creamos la variable pintar para jugar con ella.
    var pintar = true;

    //Nos creamos el color default.
    let colorDefault = "white";

    //Creamos la variable pintar.
    var pintar = true;

    //Nos creamos la constante colores con cada color.
    const colores = {
        red: "rgb(255,0,0)",
        blue: "rgb(0,0,255)",
        green: "rgb(0,128,0)",
        yellow: "rgb(255,255,0)",
        black: "rgb(0,0,0)",
        white: "rgb(255,255,255)",
      };

    // Evento para seleccionar un color de la paleta.
    todosColores.addEventListener("click", (evento) => {
        if (evento.target.className==="colorCuadrado") {
            colorDefault = colores[evento.target.id];
            pintar = false;
        }

    }, false);

    // Manejar el clic en la pizarra.
    pizarra.addEventListener("mouseover", (evento) => {
        if (pintar) {
          pintarCelda(evento.target, colorDefault);
        }
      });

     
    pizarra.addEventListener("click", () => {
        pintar = !pintar;
    });

    //Reseteamos la tabla con la función creada en la biblioteca.
    botonBorrar.addEventListener("click", () => {
        resetearTabla();
    });

    //FIN DE DOMContentLoaded.
});