import React, { useState, useEffect } from "react";

const Cronometro = () => {

    // Estados para manejar el tiempo en milisegundos y el estado de ejecución
  const [tiempo, setTiempo] = useState(0);
  const [enMarcha, setEnMarcha] = useState(true);

  // Formatear el tiempo a minutos, segundos y milisegundos
  const formatearTiempo = (milisegundos) => {
    const segundos = Math.floor(milisegundos / 1000);
    const centesimas = Math.floor((milisegundos % 1000) / 10);
    return `${String(segundos).padStart(2, "0")}:${String(centesimas).padStart(
      2,
      "0"
    )}`;
  };

  useEffect(() => {
    let intervalo;

    if (enMarcha) {
      // Iniciar el intervalo que incrementa el tiempo
      intervalo = setInterval(() => {
        setTiempo((prevTiempo) => prevTiempo + 10); // Incrementa en 10ms
      }, 10);
    }

    // Limpieza del intervalo cuando el componente se desmonta.
    return () => {
        clearInterval(intervalo);
    };
    }, [enMarcha]);

    // Funciones para manejar los botones.
    const Parar = () => setEnMarcha(false);
    const Reiniciar = () => {
        setTiempo(0);
        setEnMarcha(true);
    };

  return (
    <>
    <div>
      <p>
        {formatearTiempo(tiempo)}
      </p>
      <div>
        <button onClick={Parar}>
          Parar
        </button>
        <button onClick={Reiniciar}>Reiniciar</button>
      </div>
    </div>
    </>
  );
};

export default Cronometro;