"use strict";

//Ejercicio 1.

//Creamos la función para pasar a mayúscula.
function pasarMayusculas (valor) {

    return valor.toUpperCase();

}

//Ejercicio 2.

//Creamos la función para generar un array aleatorio.
function generarArrayAleatorio() {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array = [...array, (Math.floor(Math.random() * 10) + 1)];
    }
    return array;
}

//Creamos la función para mostrar los números mayores a 5.
function mostrarNumerosMayorCinco (array1, array2, array3) {

    //Juntamos los  arrays.
    let arrayCombinado = [...array1, ...array2, ...array3];
    let arrayFiltrado = [];

    for (let i = 0; i < arrayCombinado.length; i++) {
        
        //Hacemos la criba.
        if (arrayCombinado[i] > 5) {

            arrayFiltrado = [...arrayFiltrado, arrayCombinado[i]]
            
        }
        
    }

    return arrayFiltrado;

}

//Ejercicio 3.

const usuarios = [
    {
      nombre: "Luis",
      preferencias: { tema: "oscuro", idioma: "español", edad: 25 },
      contacto: {
        direccion: {
          calle: "Calle falsa, 666",
          localidad: "Elda",
          pais: "España",
        },
        correoelectronico: "correofalso@yahoo.com",
        telefono: "123456789",
      },
    },
    {
      nombre: "Marta",
      preferencias: { tema: "claro", idioma: "catalán", edad: 15 },
      contacto: {
        direccion: {
          calle: "Calle también falsa, 123",
          localidad: "Andorra la Vella",
          pais: "Andorra",
        },
        correoelectronico: "correoandorrano@gmail.com",
        telefono: "",
      },
    },
    {
      nombre: "Alberto",
      preferencias: { tema: "oscuro", idioma: "español", edad: 56 },
      contacto: {
        direccion: {
          calle: "Elm Street, 666",
          localidad: "Petrer",
          pais: "España",
        },
        correoelectronico: "correonulo@yahoo.com",
        telefono: "548632478",
      },
    },
    {
      nombre: "Jacinto",
      preferencias: { tema: "claro", idioma: "inglés", edad: 17 },
      contacto: {
        direccion: {
          calle: "Elm Street, 667",
          localidad: "Elda",
          pais: "España",
        },
        correoelectronico: "correofalso@gmail.com",
        telefono: "",
      },
    },
    {
      nombre: "Rigoberta",
      preferencias: { tema: "claro", idioma: "francés", edad: 34 },
      contacto: {
        direccion: {
          calle: "Calle inexistente, 6",
          localidad: "Elda",
          pais: "Española",
        },
        correoelectronico: "correofalso@gmail.com",
        telefono: "232547859",
      },
    },
    {
      nombre: "Sandra",
      preferencias: { tema: "oscuro", idioma: "español", edad: 18 },
      contacto: {
        direccion: {
          calle: "Calle de mentira, s/n",
          localidad: "Petrer",
          pais: "España",
        },
        correoelectronico: "estecorreonoexiste@gmail.com",
        telefono: "452158697",
      },
    },
    {
      nombre: "Sandra",
      preferencias: { tema: "oscuro", idioma: "español", edad: 18 },
      contacto: {
        direccion: {
          calle: "Calle existente, 34",
          localidad: "Petrer",
          pais: "España",
        },
        correoelectronico: "correoinexistente@yahoo.com",
        telefono: "",
      },
    },
  ];



//Exportamos todo.
export {pasarMayusculas, generarArrayAleatorio, mostrarNumerosMayorCinco, usuarios};