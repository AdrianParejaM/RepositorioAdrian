"use strict";

//Ejercicio 1.

//Genera un número aleatorio entre 100 y 1000.
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 901) + 100;
  }

// Función para marcar todos los checkbox que contienen números pares.
function marcarPares() {
    const checkboxes = document.querySelectorAll('#checkboxContainer input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      const numero = parseInt(checkbox.dataset.numero, 10);
      if (numero % 2 === 0) {
        checkbox.checked = true;
      }
    });
  }
  
  // Función para desmarcar todos los checkbox.
  function desmarcarTodos() {
    const checkboxes = document.querySelectorAll('#checkboxContainer input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
  }


  //Ejercicio 2.

  //Función para crear el parrafo a base de lo que entre por el texto y el estilo indicado en el html.
  function crearParrafo(texto, estilo) {
    const resultadoDiv = document.getElementById("resultado");
  
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = texto;
    nuevoParrafo.classList.add(estilo);
  
    resultadoDiv.appendChild(nuevoParrafo);
  }



  //Ejercicio 3.






  //Ejercicio 4.






  //Ejercicio 5.




  

//Exportamos todo.
export {generarNumeroAleatorio, marcarPares, desmarcarTodos, crearParrafo};