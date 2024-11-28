"use strict";

//Importamos todo lo necesario para este ejercicio.
import {numeroAleatorio} from "../Biblioteca.js";

document.addEventListener("DOMContentLoaded", () => {

    //Aquí dentro va todo el ejercicio.

    const promesa = new Promise ((resolver, rechazar) => {

        setTimeout(() => {

            let numeroRandom = numeroAleatorio();

            if (numeroRandom % 2 == 0) {

                resolver (numeroRandom);
                
            } else {

                rechazar (new Error(`El número ${numeroRandom} es impar.`));
                
            }
            
        }, 2000);
    
    });

    promesa
        .then((datos) => {
            console.log(`El número ${datos} es par`);
        })
        .catch((error) => {
            console.log(error.message);
        });

    //FIN DE DOMContentLoaded.
});