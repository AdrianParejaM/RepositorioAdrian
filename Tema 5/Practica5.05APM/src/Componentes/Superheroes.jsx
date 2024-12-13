import React, { useEffect, useState } from 'react';
import { obtenerDatos } from '../FuncionesJS/funcionesDatos';

const Superheroes = () => {

    //Asignamos los useState;
    const superheroesInicial = [];
    const errorInicial = "";
    const [superheroes, setSuperheroes] = useState(superheroesInicial);
    const [errores, setErrores] = useState(errorInicial);

    //Asignamos a una constante la llamada a la API.
    const url = "";

    //Traemos los datos de la API con el "async - await".
    const traerHeroes = async () => {

      try {

        const datos = await obtenerDatos(url);
        setSuperheroes(datos.results)
        
      } catch (error) {

        setErrores(`Error al obtener los superhéroes: ${error.message}`);
        
      }

    };

    useEffect(() => {

      traerHeroes();

    });

  return (
    <>
        <h1>Enciclopedia de Superhéroes de Marvel</h1>
        <div id="contenedor">
          <div id="heroes">

          </div>
          <div id="informacion">

          </div>
        </div>
    </>
  );
};

export default Superheroes;