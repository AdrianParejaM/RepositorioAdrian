import React from 'react';
import { fechaFormatoEuropeo } from "../Biblioteca/Biblioteca.js";
import Protagonistas from './Protagonistas.jsx';

const MostrarContenido = (props) => {
  const peliculaSeleccionada = props.peliculaSeleccionada;

  return (
    <>
      {peliculaSeleccionada ? (
        <>
          <div id="titulo">
            <h3 id="tituloPelicula">{peliculaSeleccionada.title}</h3>
          </div>
          <div id="datos">
            <p>Director: <span>{peliculaSeleccionada.director}</span></p>
            <p>Productor: <span>{peliculaSeleccionada.producer}</span></p>
            <p>Fecha de lanzamiento: <span>{fechaFormatoEuropeo(peliculaSeleccionada.release_date)}</span></p>
            <p>Sinopsis: <span>{peliculaSeleccionada.opening_crawl}</span></p>
          </div>
          <Protagonistas pelicula={peliculaSeleccionada} />
        </>
      ) : (
        <h3 id="tituloPelicula">Selecciona una película</h3>
      )}
    </>
  );
};

export default MostrarContenido;
