import React, { useState, useEffect } from "react";
import Localizador from "./Localizador.jsx";
import Colorines from "./Colorines.jsx";
import Contador from "./Contador.jsx";
import Cronometro from "./Cronometro.jsx";

const Montar = () => {

    //Creamos los "useState" mostrar para controlar los componentes.
    //Antes tenía un componente para cada botón pero lo he metido todo en este para mostrártelo todo a la vez.
    const valorInicial = false;
    const [mostrarLocalizador, setMostrarLocalizador] = useState(valorInicial);
    const [mostrarColorines, setMostrarColorines] = useState(valorInicial);
    const [mostrarContador, setMostrarContador] = useState(valorInicial);
    const [mostrarCronometro, setMostrarCronometro] = useState(valorInicial);

  return (
    <>
    <div>
        <h2>Localizador</h2>
        <button
          onClick={() => {
            setMostrarLocalizador(!mostrarLocalizador);
          }}
        >
          Montar/desmontar localizador
        </button>
        {mostrarLocalizador && <Localizador />}

        <h2>Colorines</h2>
        <button
          onClick={() => {
            setMostrarColorines(!mostrarColorines);
          }}
        >
          Montar/desmontar colorines
        </button>
        {mostrarColorines && <Colorines />}

        <h2>Contador</h2>
        <button
          onClick={() => {
            setMostrarContador(!mostrarContador);
          }}
        >
          Montar/desmontar contador
        </button>
        {mostrarContador && <Contador />}

        <h2>Cronómetro</h2>
        <button
          onClick={() => {
            setMostrarCronometro(!mostrarCronometro);
          }}
        >
          Montar/desmontar cronómetro
        </button>
        {mostrarCronometro && <Cronometro />}
      </div>
    </>
  );
};

export default Montar;