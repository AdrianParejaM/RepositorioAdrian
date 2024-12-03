import React from 'react';
import {fechaFormatoEuropeo, listaPelis} from  "./Biblioteca/Biblioteca.js";
import './Enciclopedia.css';

const Enciclopedia = () => {


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

  return (
    <>
    <h1>Enciclopedia de Star Wars</h1>
    <div id="contenedor">
        <div id="peliculas">
            <h2>Películas</h2>
            <ul id="listaPeliculas"> 
            </ul>
            </div>
            <div id="informacion">
            <div id="titulo">
                <h3 id="tituloPelicula">Selecciona una película</h3>
            </div>
            <div id="datos">
                <p>Director: <span id="director"></span></p>
                <p>Productor: <span id="productor"></span></p>
                <p>Fecha de lanzamiento: <span id="fecha"></span></p>
                <p>Sinopsis: <span id="sinopsis"></span></p>
            </div>
        </div>
    </div>
    </>
  )
};

export default Enciclopedia;