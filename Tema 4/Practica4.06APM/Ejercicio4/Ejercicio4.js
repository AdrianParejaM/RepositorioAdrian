"use strict";

//Importamos todo lo necesario para este ejercicio.
import {actualizarPoblaciones, validarFormulario} from "../Biblioteca.js";

document.addEventListener("DOMContentLoaded", () => {

    const provinciaSelect = document.getElementById("provincia");
    const poblacionSelect = document.getElementById("poblacion");
    const boton = document.getElementById("enviar");

    // Añade el addEventListener para actualizar las poblaciones.
    provinciaSelect.addEventListener("click", 
        (evento) => {
        actualizarPoblaciones(provinciaSelect, poblacionSelect);
        },
    false);

    // Validamos el formulario.
    boton.addEventListener("click", 
        (evento) => {
        validarFormulario(evento, provinciaSelect, poblacionSelect);
        },
    false);

    // FIN DE DOMContentLoaded.
});