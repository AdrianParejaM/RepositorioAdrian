import React, { useEffect, useState } from 'react';

const Protagonistas = () => {

    const [protagonistas, setProtagonistas] = useState(null);

    //Obtenemos los protagonistas de la API.
    const url = "https://swapi.dev/api/films/";

    //Traemos los datos de la API con el "async-await".
    const traerProtagonistas = async () => {

        try {

            const datos = await obtenerDatos(url);
            setProtagonistas(datos.results);
        
        } catch (error) {

            setError(`Error al obtener las películas: ${error.message}`);
        
        }

        //cuando traiga los actores con Promise.allSettled comprobar el status fullfilled, si es fullfilled lo imprimes, si no, no lo imprimes y haces el siguiente
  
  };

  return (
    <>
    </>
  );
};

export default Protagonistas;