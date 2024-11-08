"use strict";

//Importamos todo lo necesario para este ejercicio.
import {generarNumeroAleatorio, marcarPares, desmarcarTodos} from "../Biblioteca.js";

document.addEventListener("DOMContentLoaded", () => {
    // Aquí dentro va todo el ejercicio.
  
    const container = document.getElementById('checkboxContainer');
    for (let i = 0; i < 100; i++) {
      const numero = generarNumeroAleatorio();
    
      // Crear el elemento checkbox y la etiqueta
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = numero;
      checkbox.dataset.numero = numero;
    
      const label = document.createElement('label');
      label.textContent = numero;
    
      // Añadir el checkbox y la etiqueta al contenedor
      container.appendChild(checkbox);
      container.appendChild(label);
    }
    
    // Agregar los event listeners a los botones
    document.getElementById('marcarPares').addEventListener('click', marcarPares);



    document.getElementById('desmarcar').addEventListener('click', desmarcarTodos);

    // FIN DE DOMContentLoaded.
});