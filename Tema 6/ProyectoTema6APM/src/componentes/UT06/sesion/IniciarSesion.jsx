import React from "react";

const IniciarSesion = () => {
  // Se obtienen los objetos necesarios desde el contexto.

  return (
    <div className='cuentaUsuario'>
      <h2>Iniciar sesión</h2>
      <label htmlFor='email'>Correo electrónico</label>
      <input
        type='email'
        name='email'
        id='email'
        placeholder='Su correo electrónico.'
        onChange={(e) => {}}
      />
      <button className='botonSesion' onClick={(e) => {}}>
        Iniciar sesión
      </button>
    </div>
  );
};

export default IniciarSesion;
