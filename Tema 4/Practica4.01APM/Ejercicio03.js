"use strict";

//¡¡IMPORTANTE!! PONER PARA TODO A PARTIR DE AHORA.
document.addEventListener("DOMContentLoaded", () => {

    //Aquí dentro va todo el ejercicio.

    // Seleccionar el elemento donde se mostrará la posición del ratón
    const mousePositionElement = document.getElementById('mouse-position');

    document.addEventListener('mousemove', 
        (evento) => {
        // Obtener las coordenadas actuales del ratón
        const x = evento.clientX;
        const y = evento.clientY;

        // Actualizar el contenido del elemento con las coordenadas
        mousePositionElement.textContent = `X: ${x}, Y: ${y}`;
        },
    false);

    //FIN DE DOMContentLoaded.
});

