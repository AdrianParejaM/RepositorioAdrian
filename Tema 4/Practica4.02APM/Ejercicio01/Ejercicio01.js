"use strict";

document.addEventListener("DOMContentLoaded", () => {

    //Aquí dentro va todo el ejercicio.

    //Selecionamos los 'h3' y los 'p'.
    const cabeceras = document.querySelectorAll('h3');
    const subTexto = document.querySelectorAll('p');
    
    //No lo he realizado en una biblioteca porque no he visto necesario meter este for en una función.

    // Recorremos cada h3.
    for (let i = 0; i < cabeceras.length; i++) {
        // Agregamos el 'addEventListener' a los elementos impares.
        if (i % 2 === 0) {
            
            cabeceras[i].addEventListener('click', (event) => {
                
                const content = subTexto[i / 2];  

                
                content.classList.toggle('visible');
            }, false);
        }
    }


    //FIN DE DOMContentLoaded.
});