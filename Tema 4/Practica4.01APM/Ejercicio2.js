"use strict";

//¡¡IMPORTANTE!! PONER PARA TODO A PARTIR DE AHORA.
document.addEventListener("DOMContentLoaded", () => {

    //Aquí dentro va todo el ejercicio.

    // Generar un color aleatorio en formato hexadecimal
    function generarColorHexadecimal() {
        var letras = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        var color = "#";
        for (var i = 0; i < 6; i++) {
            var indexAleatorio = Math.floor(Math.random() * letras.length);
            color += letras[indexAleatorio];
        }
        return color;
    }

    // Cambiar el fondo al hacer doble clic
    document.addEventListener("dblclick", function () {
        // Generar un color aleatorio
        var colorAleatorio = generarColorHexadecimal();
        // Cambiar el fondo de la página
        document.body.style.backgroundColor = colorAleatorio;
    });

    //FIN DE DOMContentLoaded.
});