import React from "react";
import useSesion from "../../hooks/useSesion.jsx";
import "./IniciarSesion.css";

const IniciarSesion = () => {
  //Obtenemos los objetos del contexto.
  const { actualizarDato, iniciarSesion, passwordOlvidada } = useSesion();

  return (
    <div className='cuentaUsuario'>
      <h2>Iniciar sesión</h2>
      <label htmlFor='email'>Correo electrónico</label>
      <input
        type='email'
        name='email'
        id='email'
        placeholder='Su correo electrónico.'
        onChange={(e) => {
          actualizarDato(e);
        }}
      />
      <label htmlFor='password'>Contraseña</label>
      <input
        type='password'
        name='password'
        id='password'
        placeholder='Su contraseña.'
        onChange={(e) => {
          actualizarDato(e);
        }}
      />

      <p
        className='passwordOlvidada'
        onClick={(e) => {
          passwordOlvidada(e);
        }}
      >
        He olvidado mi contraseña
      </p>

      <button
        className='botonSesion'
        onClick={(e) => {
          iniciarSesion();
        }}
      >
        Iniciar sesión
      </button>
    </div>
  );
};

export default IniciarSesion;
