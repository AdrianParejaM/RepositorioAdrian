"use strict";

//Importamos todo lo necesario para este ejercicio.
import {crearParrafo} from "../Biblioteca.js";

document.addEventListener("DOMContentLoaded", () => {
    // Aquí dentro va todo el ejercicio.
  
    document.getElementById("crear").addEventListener("click",
        (evento) => {
        const texto = document.getElementById("texto").value;
        const estilo = document.getElementById("estilo").value;
            crearParrafo(texto, estilo);
        },
    false);

    // FIN DE DOMContentLoaded.
});