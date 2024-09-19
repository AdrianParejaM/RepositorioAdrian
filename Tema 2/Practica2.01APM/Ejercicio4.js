"use strict";

//Creamos la función.

function factura (nombreProducto = "Producto genérico", precio = 100, impuestoPorcentaje = 21){

    if (isNaN(precio) || isNaN(impuestoPorcentaje)) {

        console.log("Error. Precio o impuesto incorrecto.");
        
    }else{ 

    let precioTotal = precio + (precio * (impuestoPorcentaje/100));

    console.log(`Producto: ${nombreProducto}. Precio final con impuestos: ${precioTotal}`);

    }
}

//Prueba con todo genérico.
factura();

//Prueba correcta.
factura("Portátil", 1400, 18);

//Prueba correcta (aunque no se por qué no pone el . para los decimales).
factura("Teléfono", "200", "20");

//Prueba que indica el error.
factura("Tablet", "abc", 15);
