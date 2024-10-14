"use strict";

//Funciones para ejercicio 1.

// Función para obtener el número de párrafos de la página.
function contarParrafos() {
    let parrafos = document.getElementsByTagName('p');
    let numeroParrafos = parrafos.length;
    console.log(`Número de párrafos: ${numeroParrafos}`);
    return numeroParrafos;
  }

// Función para obtener el texto del segundo párrafo.
function textoSegundoParrafo() {
    let parrafos = document.getElementsByTagName('p');
    let segundoParrafo = parrafos[1];
    console.log(`Texto del segundo párrafo: ${segundoParrafo}`);
    return segundoParrafo;
  }

// Función para contar el número de enlaces.
function contarEnlaces() {
    let enlaces = document.getElementsByTagName('a');
    let numeroEnlaces = enlaces.length;
    console.log(`Número de enlaces: ${numeroEnlaces}`);
    return numeroEnlaces;
  }

// Función para obtener la dirección del primer enlace.
function primerEnlace() {
    let enlaces = document.getElementsByTagName('a');
    let primerEnlace = enlaces[0];
    console.log(`Dirección del primer enlace: ${primerEnlace}`);
    return primerEnlace;
  }

// Función para obtener la dirección del penúltimo enlace
function penultimoEnlace() {
    let enlaces = document.getElementsByTagName('a');
    let numeroEnlaces = enlaces.length;
    let penultimoEnlace = enlaces[numeroEnlaces - 2];
    console.log(`Dirección del penúltimo enlace: ${penultimoEnlace}`);
    return penultimoEnlace;
  }  



//Funciones para ejercicio 2.

//Generamos un número aleatorio entre 1 y 1000 (chatGPT).
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 1000) + 1;
  }

  function anyadirElementoLista() {
    let ul = document.getElementById('listaFea');
    let nuevoLi = document.createElement('li');
    nuevoLi.textContent = `Número aleatorio: ${generarNumeroAleatorio()}`;
    ul.appendChild(nuevoLi);
  }




//Funciones para ejercicio 3.

//Creamos la función toCani.
function toCani(cadena) {
    let resultado = '';
    // Para alternar entre mayúsculas y minúsculas.
    let usarMayuscula = true;  
  
    for (let i = 0; i < cadena.length; i++) {
      let char = cadena[i];
  
      // Cambiamos la letra 'c' por 'k'.
      if (char.toLowerCase() === 'c') {
        char = 'k';
      }
  
      // Alternamos entre mayúsculas y minúsculas.
      if (usarMayuscula) {
        resultado += char.toUpperCase();
      } else {
        resultado += char.toLowerCase();
      }
  
      // Cambiamos el valor para alternar mayúsculas y minúsculas.
      usarMayuscula = !usarMayuscula;
    }
  
    // Generar entre 2 y 5 'H' al final.
    let hCount = Math.floor(Math.random() * 4) + 2;
    resultado += 'H'.repeat(hCount);
  
    return resultado;
  }

  //Exportamos todo.
export {toCani, contarParrafos, textoSegundoParrafo, contarEnlaces, primerEnlace, penultimoEnlace, anyadirElementoLista};