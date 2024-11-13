"use strict";

//Importamos todo lo necesario para este ejercicio.
import {agregarDisco, mostrarDiscos/*, validarFormularioDiscos*/} from "../Biblioteca.js";

document.addEventListener("DOMContentLoaded", () => {
    // Aquí dentro va todo el ejercicio.
  
    
    document.getElementById('guardar').addEventListener('click', 
        (evento) => {
        // Obtener los valores del formulario
        const nombre = document.getElementById('nombreDisco').value;
        const grupo = document.getElementById('grupo').value;
        const anio = document.getElementById('anio').value;
        const tipo = document.getElementById('tipo').value;
        const localizacion = document.getElementById('localizacion').value;
        const prestado = document.getElementById('prestado').checked;
      
        // Valida y luego agrega el disco si todo va bien.
        //if (validarFormularioDiscos()) {
            agregarDisco(nombre, grupo, anio, tipo, localizacion, prestado);
            document.getElementById('discoForm').reset();
       // }
        },
    false);
      
    document.getElementById('mostrar').addEventListener('click', 
        (evento) => {
        mostrarDiscos();
        },
    false);


    // FIN DE DOMContentLoaded.
});