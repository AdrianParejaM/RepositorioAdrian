"use strict";

document.addEventListener("DOMContentLoaded", () => {

    //Aquí dentro va todo el ejercicio.

    //Al igual que el anterior no he visto necesario hacer una función solo para hacer esto.

    // Seleccionamos todas las pestañas y todos los contenidos.
    const pestanyas = document.querySelectorAll('.pestanya');
    const contenidos = document.querySelectorAll('.contenido');

    // Recorremos cada pestaña y le añadimos 'addEventListener'.
    pestanyas.forEach((pestanya, index) => {
        pestanya.addEventListener('click', (event) => {
            // Para lo de 'active' me ayudó el chat.
            contenidos.forEach(contenido => contenido.classList.remove('active'));

            // Mostramos el contenido.
            contenidos[index].classList.add('active');
        }, false);
    });


    //FIN DE DOMContentLoaded.
});