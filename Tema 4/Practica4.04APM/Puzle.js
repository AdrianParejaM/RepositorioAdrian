"use strict";

//Importamos todo lo necesario para este ejercicio.
import {verificarPuzzle} from "./Biblioteca.js";

document.addEventListener("DOMContentLoaded", () => {
    // Aquí dentro va todo el ejercicio.

    //Te he dejado el código para que aparezca el mensaje, pero no me va, es simplemente que me he tirado mucho tiempo intentándolo y no lo
    //he conseguido, ni solo ni con ayuda (del chat), lo demás funciona correctamente.

    // Elemento de mensaje al completar bien el puzle.
    const mensaje = document.getElementById("mensaje");

    // Asignar propiedad "draggable" a los objetos arrastrables.
    const arrastrable = document.getElementsByClassName("arrastrable");
    for (let i = 0; i < arrastrable.length; i++) {
        arrastrable[i].setAttribute("draggable", true);
        arrastrable[i].setAttribute("id", `pieza-${i}`);
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

    // Seleccionamos los contenedores vacíos donde se podrán soltar las piezas.
    const soltarImagenes = document.getElementsByClassName("soltarImg");

    // Añadimos eventos a cada contenedor vacío para permitir el drop.
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

    
    document.getElementById("botonBorrar").addEventListener(
        "click",
        () => {
            // Selecciona el contenedor original y todas las piezas arrastrables.
            const zonaArrastrable = document.getElementById("contenedorPuzle");
            const arrastrables = document.getElementsByClassName("arrastrable");
    
            //Aquí necesité ayuda del chat.
            Array.from(arrastrables).forEach((pieza) => {
                // Si la pieza no está en "zonaArrastrable", la vuleve a poner.
                if (pieza.parentNode !== zonaArrastrable) {
                    zonaArrastrable.appendChild(pieza);
                }
                
            });
            if (!mensaje.classList.contains("oculto")) {
                mensaje.classList.add("oculto");
            }
        },
        false);
    
    

    // FIN DE DOMContentLoaded.
});