"use strict";

function verificarPuzzle(contenedoresVacios, mensaje) {
    let completado = true;

    // Verifica si cada contenedor tiene la pieza correcta, comparando los `id` de las piezas.
    for (let i = 0; i < contenedoresVacios.length; i++) {
        const contenedor = contenedoresVacios[i];

        // Comprueba que el contenedor tiene una pieza y que su `id` coincide con el esperado
        if (!contenedor.hasChildNodes() || contenedor.firstChild.id !== `pieza-${i}`) {
            completado = false;
            break;
        }
    }

    // Muestra o esconde el mensaje de completado según el estado del puzzle
    mensaje.classList.toggle("visible", completado);
    mensaje.classList.toggle("oculto", !completado);
}

//Exportamos todo.
export {verificarPuzzle};