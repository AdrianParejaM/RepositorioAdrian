"use strict";

let totalFacturas = [124, 48, 268];

let propinas = [];

let cantidadTotalPagar = [];

function calcularPropinas (facturasCalcular) {

    for (let i = 0; i < facturasCalcular.length; i++) {
    
        if (facturasCalcular[i] < 50) {

            //Calculamos cuánto es la propina.
            let calcularPropina = facturasCalcular[i] * 0.20;
            propinas[i] = calcularPropina;

            //Calculamos el precio total con la propina.
            let precioConPropina = facturasCalcular[i] + propinas[i];
            cantidadTotalPagar[i] = precioConPropina;
            
        } else if(facturasCalcular[i] >= 50 && facturasCalcular[i] <= 200){

            //Calculamos cuánto es la propina.
            let calcularPropina = facturasCalcular[i] * 0.15;
            propinas[i] = calcularPropina;

            //Calculamos el precio total con la propina.
            let precioConPropina = facturasCalcular[i] + propinas[i];
            cantidadTotalPagar[i] = precioConPropina;
            
        }else if(facturasCalcular[i] > 200) {

            //Calculamos cuánto es la propina.
            let calcularPropina = facturasCalcular[i] * 0.10;
            propinas[i] = calcularPropina;

            //Calculamos el precio total con la propina.
            let precioConPropina = facturasCalcular[i] + propinas[i];
            cantidadTotalPagar[i] = precioConPropina;

        }

    
    }
    
}

calcularPropinas(totalFacturas);

console.log(`Precio total de las facturas: ${totalFacturas}.
    \nPrecio total de las propinas: ${propinas}.
    \nPrecio total a pagar: ${cantidadTotalPagar}`);
