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
  
  };

  return (
    <>
    </>
  );
};

export default Protagonistas;