"use strict";

//Ejercicio 1.

//Función para encontrar la palabra "sexo" y sustituirla.

function sustituirPalabra() {

    let body = document.body;
    let texto = body.innerHTML;
    let partes = texto.split('sexo');
    let textoModificado = partes.join('<span class="contenidoBloqueado">Contenido Bloqueado</span>');
    body.innerHTML = textoModificado;
}


//Ejercicio 2


function crearTabla() {

    

    for (let i = 0; i < 10; i++) {
        

        
    }
    
}



//Exportamos todo.
export {sustituirPalabra, crearTabla};