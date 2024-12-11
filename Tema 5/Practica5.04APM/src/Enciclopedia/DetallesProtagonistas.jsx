import React from 'react';

const DetallesProtagonista = ({ detalles }) => {
  if (!detalles) return null;

  //Ponemos los detalles de los protagonistas.
  return (
    <div id="detallesProtagonista">
      <h4>{detalles.name}</h4>
      <p>Género: {detalles.gender}</p>
      <p>Altura: {detalles.height} cm</p>
      <p>Peso: {detalles.mass} kg</p>
      <p>Color de pelo: {detalles.hair_color}</p>
      <p>Color de ojos: {detalles.eye_color}</p>
      {/*La imágen no he podido.*/}
    </div>
  );
};

export default DetallesProtagonista;