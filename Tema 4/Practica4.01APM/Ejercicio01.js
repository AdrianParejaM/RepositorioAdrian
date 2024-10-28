"use strict";

//¡¡IMPORTANTE!! PONER PARA TODO A PARTIR DE AHORA.
document.addEventListener("DOMContentLoaded", () => {

    //Aquí dentro va todo el ejercicio.

    const comenzar = document.getElementById("comenzar");
    const detener = document.getElementById("detener");
    const saludos = document.getElementById("saludos");

    let id = null;

    comenzar.addEventListener("click", (event) => {
        if (!id) {

            id = setInterval(() => {
                saludos.innerHTML += `<h1>Hola feo</h1>`;
            }, 1000);
            
        }
    }, false);


    detener.addEventListener("click", (event) => {
        clearInterval(id);
        id = null;
    }, false);









    //FIN DE DOMContentLoaded.
});