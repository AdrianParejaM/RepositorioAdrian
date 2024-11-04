"use strict";

//Creamos la tabla para la pizarra.
function crearPizarra(tabla) {
    

    // Asignamos el número de filas y columnas.
    let filas = 50;
    let columnas = 60;

    // Lo creamos.
    for (let i = 0; i < filas; i++) {
        
        let fila = document.createElement("tr");

        for (let j = 0; j < columnas; j++) {
            
            let celda = document.createElement("td");
            celda.classList.add("pizarra-celda");
            fila.appendChild(celda);
        }

        tabla.appendChild(fila);
    }
}

// Las celdas se pintan según el color seleccionado.

function pintarCelda(celda, colorSeleccionado) {
    celda.style.backgroundColor = colorSeleccionado;
  }


//Función para resetear la tabla.
function resetearTabla() {
    const pizarraCelda = document.querySelectorAll(".pizarra-celda");
    pizarraCelda.forEach((evento) => {
      evento.style.backgroundColor = "white";
    });
  }



//Exportamos todo.
export {crearPizarra, resetearTabla, pintarCelda};