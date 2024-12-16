import React from 'react';
import MostrarImagen from './MostrarImagen.jsx';

const MostrarContenidoPersonajes = (props) => {
  //Componente para mostrar únicamente el contenido de los personajes.
  const personajeSeleccionado = props.personajeSeleccionado;

  return (
    <>
      {personajeSeleccionado ? (
        <>
          <div id="titulo">
            <h3 id="tituloPersonaje">{personajeSeleccionado.name}</h3>
          </div>
          <div id="datos">
            <p>Estado: <span>{personajeSeleccionado.status}</span></p>
            <p>Especie: <span>{personajeSeleccionado.species}</span></p>
            <p>Tipo de especie: <span>{personajeSeleccionado.type.length > 0 ? personajeSeleccionado.type : `${personajeSeleccionado.name} no tiene subtipo de especie.`}</span></p>
            <p>Origen: <span>{personajeSeleccionado.origin.name}</span></p>
          </div>
          <div id="imagen">
            <MostrarImagen detalles={personajeSeleccionado} />
          </div>
        </>
      ) : (
        <h3 id="tituloPersonaje">Selecciona un personaje</h3>
      )}
    </>
  );
};

export default MostrarContenidoPersonajes;
