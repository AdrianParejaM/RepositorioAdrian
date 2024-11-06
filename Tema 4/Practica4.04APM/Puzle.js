"use strict";

//Importamos todo lo necesario para este ejercicio.
import {verificarPuzzle} from "./Biblioteca.js";

document.addEventListener("DOMContentLoaded", () => {
    // Aquí dentro va todo el ejercicio.

    // Elemento de mensaje al completar bien el puzle.
    const mensaje = document.getElementById("mensaje");

    // Asignar propiedad "draggable" a los objetos arrastrables.
    const arrastrable = document.getElementsByClassName("arrastrable");
    for (let i = 0; i < arrastrable.length; i++) {
        arrastrable[i].setAttribute("draggable", true);
        arrastrable[i].setAttribute("id", `pieza-${i}`); // Añadimos un id único a cada pieza para poder referenciarla
    }

    // Evento dragstart para iniciar el arrastre y almacenar la información de la pieza.
    for (let i = 0; i < arrastrable.length; i++) {
        arrastrable[i].addEventListener(
            "dragstart", 
            (evento) => {
            evento.dataTransfer.setData("identificador", evento.target.id);
            evento.dataTransfer.setData("nombre", evento.target.localName);
        },
        false);
    }

    // Seleccionamos los contenedores vacíos donde se podrán soltar las piezas
    const soltarImagenes = document.getElementsByClassName("soltarImg");

    // Añadimos eventos a cada contenedor vacío para permitir el drop
    for (let contenedor of soltarImagenes) {
        contenedor.addEventListener(
            "dragover", 
            (evento) => {
            evento.preventDefault(); // Prevenimos el funcionamiento por defecto.
            },
        false);

        contenedor.addEventListener(
            "drop", 
            (evento) => {
            evento.preventDefault();// Volvemos a prevenir el funcionamiento por defecto.
            const identificadorPieza = evento.dataTransfer.getData("identificador");
            const pieza = document.getElementById(identificadorPieza);

            // Verificamos que el contenedor no tenga ya una pieza y si es así la añadimos.
            if (evento.target.classList.contains("soltarImg")) {
                evento.target.appendChild(pieza);
            }
            verificarPuzzle(soltarImagenes, mensaje);
            },
        false);
    }

    

    
    

    // FIN DE DOMContentLoaded.
});