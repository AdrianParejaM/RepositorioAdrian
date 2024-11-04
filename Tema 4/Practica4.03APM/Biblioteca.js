"use strict";

//Creamos la tabla
function crearPizarra(tabla) {
    

    // Asignamos el número de filas y columnas.
    let filas = 50;
    let columnas = 60;

    // Lo creamos.
    for (let i = 0; i < filas; i++) {
        
        let fila = document.createElement("tr");

        for (let j = 0; j < columnas; j++) {
            
            let celda = document.createElement("td");

            fila.appendChild(celda);
        }

        tabla.appendChild(fila);
    }
}



//Exportamos todo.
export {crearPizarra};