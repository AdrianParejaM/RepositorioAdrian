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

//Función para saber si el número es primo.
function esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

//Función para generar la tabla de 10 x 10.
function crearTabla() {
    const tabla = document.getElementById("tablaEjercicio2");
    let contador = 1;

    for (let i = 0; i < 10; i++) {
      let fila = document.createElement("tr");

      for (let j = 0; j < 10; j++) {
        let columna = document.createElement("td");
        columna.textContent = contador;
        fila.appendChild(columna);
        contador++;
      }

      tabla.appendChild(fila);
    }
  }

//Función para resaltar los números primos.
function resaltarPrimos() {
    const columnas = document.querySelectorAll("td");

    columnas.forEach(columna => {
      let numero = parseInt(columna.textContent, 10);
      if (esPrimo(numero)) {
        columna.classList.add("primoEs"); 
      }
    });
  }


    
//Ejercicio 3

// Función para generar un color aleatorio en formato hexadecimal (hecho con gpt).
function generarColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Función para cambiar el color del párrafo.
function cambiarColorParrafo() {
    let parrafos = document.querySelectorAll('p');
    let indiceAleatorio = Math.floor(Math.random() * parrafos.length);
    let colorAleatorio = generarColorAleatorio();
    parrafos[indiceAleatorio].style.backgroundColor = colorAleatorio;
}



//Ejercicio 4

//Lista de enlaces de imágenes.
var imagenes = [
    "https://album.mediaset.es/cimg/1000001/2017/02/14/r1.jpg",
    "https://www.moncloa.com/wp-content/uploads/2022/07/la-que-se-avecina-1.jpg",
    "https://album.mediaset.es/cimg/1000001/2017/02/14/f1.jpg?w=480",
    "https://es.web.img3.acsta.net/newsv7/22/03/15/15/13/2329900.jpg",
    "https://imagenes.20minutos.es/files/image_640_auto/uploads/imagenes/2023/07/28/amador-rivas-pablo-chiapella.jpeg",
];

//Referenciamos el 'img' del HTML.
var imagenActual = document.getElementById("imagenActual");

//Creamos un índice para controlar la imagen actual.
var indice = 0;

//Función para cambiar la imagen con la transición.
function cambiarImagen() {
  
  imagenActual.style.opacity = 0;

  setTimeout(function() {
      indice = (indice + 1) % imagenes.length;
      imagenActual.src = imagenes[indice];

      
      imagenActual.style.opacity = 1;
  }, 1000); 
};




//Exportamos todo.
export {sustituirPalabra, crearTabla, resaltarPrimos, cambiarColorParrafo, cambiarImagen};