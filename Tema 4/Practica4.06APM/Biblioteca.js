"use strict";

//Genera un número aleatorio entre 100 y 1000.
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 901) + 100;
  }

// Función para marcar todos los checkboxes que contienen números pares
function marcarPares() {
    const checkboxes = document.querySelectorAll('#checkboxContainer input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      const numero = parseInt(checkbox.dataset.numero, 10);
      if (numero % 2 === 0) {
        checkbox.checked = true;
      }
    });
  }
  
  // Función para desmarcar todos los checkboxes
  function desmarcarTodos() {
    const checkboxes = document.querySelectorAll('#checkboxContainer input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
  }


//Exportamos todo.
export {generarNumeroAleatorio, marcarPares, desmarcarTodos};