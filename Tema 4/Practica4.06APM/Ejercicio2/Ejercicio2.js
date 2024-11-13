"use strict";

//Importamos todo lo necesario para este ejercicio.
import {crearParrafo} from "../Biblioteca.js";

document.addEventListener("DOMContentLoaded", () => {

    // Aquí dentro va todo el ejercicio.


    const resultadoDiv = document.getElementById("resultado");
  
    //Creamos el evento en el botón.
    document.getElementById("crear").addEventListener("click",
        (evento) => {
        const texto = document.getElementById("texto").value;
        const estilo = document.getElementById("estilo").value;
        //comprobamos si el texto está vacío.
            if (texto.trim() === '') {
                resultadoDiv.innerHTML = "<p>Pon algo en el texto, ¡cazurro!</p>";
            }else{
                crearParrafo(texto, estilo);
            }
        },
    false);

    // FIN DE DOMContentLoaded.
});