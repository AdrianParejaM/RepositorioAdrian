import React, {useState} from 'react';
import {generarNumeroAleatorio} from "../../Biblioteca/Biblioteca.js";
import "./Listado.css";

const Listado = () => {

    //Creamos el array vacío que será el default.
    const valorInicial = [];

    //Creamos el "useState" para ,manejar el listado de números.
    const [listado, setListado] = useState(valorInicial);

    //Añadimos el número al "div".
    const anadirNumero = () => {
        let nuevoNum;
        //Hacemos el "do while" para comprobar que el número no esté dentro y si está, que vuelva a generar un número que no exista en el listado.
        do {
            nuevoNum = generarNumeroAleatorio();
        } while (listado.includes(nuevoNum));
        setListado([...listado, nuevoNum]);
    };

  return (
    <>
        <div id='parrafo'>
          <h1>Números aleatorios.</h1>
          <ul>
          {listado.length === 0 
            ? <li className='listado'>No hay números generados todavía.</li> 
            : listado.map((numero, index) => {
              return (
                <li className='listado' key={index}>{numero}</li>
              );
            })
          }
          </ul>
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