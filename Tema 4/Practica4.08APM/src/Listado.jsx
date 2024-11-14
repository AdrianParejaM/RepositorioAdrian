import React, {useState} from 'react';
import {generarNumeroAleatorio} from "../Biblioteca/Biblioteca.js";

const Listado = () => {

    const valorInicial = [];
    const [listado, setListado] = useState(valorInicial);

    const anadirNumero = () => {
        let nuevoNum;
        do {
            numeroGenerado = generarNumeroAleatorio();
        } while (nuevoNum.contains(numeroGenerado));
        setListado([...listado, nuevoNum]);
    };

  return (
    <>
        <div id='parrafo'>Este es el párrafo</div>
        <button
        onClick={() => {
            anadirNumero();
          }}
        >
        Generar
        </button>
        <button
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