import React from "react";
import useSesion from "../../hooks/useSesion.jsx";

const CrearCuenta = () => {

  //Utilizamos el hook para llamar las funciones del contexto.
  const { crearCuenta, actualizarDato } = useSesion();

  return (
    <div className='cuentaUsuario'>
      <h2>Crea una nueva cuenta</h2>
      <label htmlFor='email'>Correo electrónico</label>
      <input
        type='email'
        name='email'
        id='email'
        placeholder='Su correo electrónico...'
        onChange={(e) => {
          actualizarDato(e);
        }}
      />

      <label htmlFor='password'>Contraseña</label>
      <input
        type='password'
        name='password'
        id='password'
        placeholder='Su contraseña...'
        onChange={(e) => {
          actualizarDato(e);
        }}
      />
      <button
        className='botonSesion'
        onClick={(e) => {
          crearCuenta();
        }}
      >
        Crear cuenta
      </button>
      
    </div>
  );
};

export default CrearCuenta;
