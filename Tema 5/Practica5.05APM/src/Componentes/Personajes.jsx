import React, { useEffect, useState } from 'react';
import { obtenerDatos } from '../FuncionesJS/funcionesDatos.js';
import MostrarPersonajes from './MostrarPersonajes.jsx';
import MostrarContenidoPersonajes from './MostrarContenidoPersonajes.jsx';
import "./Personajes.css";

const Personajes = () => {

    //Asignamos los useState;
    const personajesIniciales = [];
    const errorInicial = "";
    const [personajes, setPersonajes] = useState(personajesIniciales);
    const [errores, setErrores] = useState(errorInicial);
    const [personajeSeleccionado, setPersonajeSeleccionado] = useState(null);

    //Asignamos a una constante la llamada a la API.
    const url = "https://rickandmortyapi.com/api/character";

    //Traemos los datos de la API con el "async - await".
    const traerPersonajes = async () => {

      try {

        const datos = await obtenerDatos(url);
        setPersonajes(datos.results)
        
      } catch (error) {

        setErrores(`Error al obtener los personajes: ${error.message}`);
        
      }

    };

    //Ejecutamos la función.
    useEffect(() => {

      traerPersonajes();

    });

  return (
    <>
        <h1>Enciclopedia de personajes de Rick y Morty</h1>
        <div id="contenedor">
          <div id="personajes">
            <MostrarPersonajes 
              personajes={personajes} 
              error={errores} 
              personajeSeleccionado={setPersonajeSeleccionado} 
            />
          </div>
          <div id="informacion">
            <MostrarContenidoPersonajes 
              personajeSeleccionado={personajeSeleccionado}
            />
          </div>
        </div>
    </>
  );
};

export default Personajes;