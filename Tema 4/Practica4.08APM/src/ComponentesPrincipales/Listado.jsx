import React, {useState} from 'react';
import {generarNumeroAleatorio} from "../../Biblioteca/Biblioteca.js";
import "./Listado.css";

const Listado = () => {

    //Creamos el array vacío que será el default.
    const valorInicial = [];

    //Creamos el useState.
    const [listado, setListado] = useState(valorInicial);

    //Añadimos el número al div.
    const anadirNumero = () => {
        let nuevoNum;
        //Hacemos el do while para comprobar que el número no esté dentro.
        do {
            nuevoNum = generarNumeroAleatorio();
        } while (listado.includes(nuevoNum));
        setListado([...listado, nuevoNum]);
    };

  return (
    <>
        <div id='parrafo'>
          <h1>Números aleatorios.</h1>
                {listado.length === 0 
                    ? 'No hay números generados todavía.' 
                    : listado.join(', ')} 
        </div>
        <button className='boton'
        onClick={() => {
            anadirNumero();
          }}
        >
        Generar
        </button>
        <button className='boton'
        onClick={() => {
            setListado([]);
        }}
        >
        Eliminar
        </button>
    </>
  );
};

export default Listado;