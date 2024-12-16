import React from 'react';

const MostrarImagen = ({ detalles }) => {
  if (!detalles) return null;

  const imagen = detalles.image;

  //Ponemos la imágen (se que probablemente se pueda hacer en el otro componente pero he decidido hacerlo en otro aparte porque al manejar una url para la imágen lo veo mejor así).
  return (
    <div id="imagenPersonajes">
      <img src={imagen} alt={detalles.name} />
    </div>
  );
};

export default MostrarImagen;