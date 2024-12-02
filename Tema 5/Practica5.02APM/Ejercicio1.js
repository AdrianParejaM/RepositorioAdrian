"use strict";

//Importamos todo lo necesario para este ejercicio.
import {fechaFormatoEuropeo, listaPelis} from "./biblioteca.js";

document.addEventListener("DOMContentLoaded", () => {

    //Aquí dentro va todo el ejercicio.

    //Cogemos tanto la url de la api como los id.
    const url = "https://swapi.dev/api/films/";
    const listaPeliculas = document.getElementById("listaPeliculas");
    const tituloPelicula = document.getElementById("tituloPelicula");
    const sinopsis = document.getElementById("sinopsis");
    const director = document.getElementById("director");
    const productor = document.getElementById("productor");
    const fecha = document.getElementById("fecha");

    //Realizamos el fetch con su contenido.
    fetch(url)
    .then((respuesta) => {
        return respuesta.json();
    })
    .then((datos) => {
      const peliculas = datos.results;
      listaPelis(peliculas, listaPeliculas, (pelicula) => {
        tituloPelicula.textContent = pelicula.title;
        director.textContent = pelicula.director;
        productor.textContent = pelicula.producer;
        fecha.textContent = fechaFormatoEuropeo(pelicula.release_date);
        sinopsis.textContent = pelicula.opening_crawl;
      });
    })
    .catch((error) => {
      //Se pone donde deben de ir las películas el error.
      listaPeliculas.textContent = (`Error al obtener las películas: ${error}`);
    });


        


    //FIN DE DOMContentLoaded.
});