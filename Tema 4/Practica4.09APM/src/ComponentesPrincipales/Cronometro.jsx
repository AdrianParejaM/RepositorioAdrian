import React, { useState, useEffect } from "react";

const Cronometro = () => {

  // Estados para manejar el tiempo y el estado de ejecución.
  const [tiempo, setTiempo] = useState(0);
  const [enMarcha, setEnMarcha] = useState(true);

  // Formatear el tiempo a minutos, segundos y milisegundos (me ha ayudado el GPT).
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
      
      intervalo = setInterval(() => {
        // Iniciar el intervalo que incrementa el tiempo (aquí también me ha ayudado ya que va relacionado con lo de arriba).
        setTiempo((prevTiempo) => prevTiempo + 10);
      }, 10);
    }

    // Limpieza del intervalo cuando el componente se desmonta.
    return () => {
        clearInterval(intervalo);
    };
  }, [enMarcha]);

    // Funciones para manejar los botones.
    const Parar = () => {

      //Condición para que si se para el cronómetro lo puedas reanudar desde donde estaba.
      enMarcha === true ? setEnMarcha(false) : setEnMarcha(true);
      
    };
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
          Parar/Reanudar
        </button>
        <button onClick={Reiniciar}>Reiniciar</button>
      </div>
    </div>
    </>
  );
};

export default Cronometro;