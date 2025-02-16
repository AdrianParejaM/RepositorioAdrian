import React, { useState, useEffect, createContext } from "react";
import { supabase } from "../supabase/supabase.js";
import { useNavigate } from "react-router-dom";

const contextoSesion = createContext();

const ProveedorSesion = ({children}) => {
  //Creamos variables con datos vacíos.
  const datosSesionInicial = {
    email: "",
    password: "",
  };
  const usuarioInicial = {};
  const errorUsuarioInicial = "";
  const sesionIniciadaInicial = false;

  // Función para la navegación programática.
  const navegar = useNavigate();

  //Creamos los estados.
  const [datosSesion, setDatosSesion] = useState(datosSesionInicial);
  const [usuario, setUsuario] = useState(usuarioInicial);
  const [errorUsuario, setErrorUsuario] = useState(errorUsuarioInicial);
  // Estado para controlar el inicio de sesión.
  const [sesionIniciada, setSesionIniciada] = useState(sesionIniciadaInicial);

  //Creamos la función para crear la cuenta.
  const crearCuenta = async () => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: datosSesion.email,
        password: datosSesion.password,
      });

      if (error) {
        throw error;
      } else {
        setErrorUsuario("Recibirás un correo electrónico para la confirmación de la creación de la cuenta.");
        setDatosSesion({ datosSesionInicial });
      }
    } catch (error) {
      setErrorUsuario(error.message);
    }


  };

  //Función para iniciar sesión con mail y contraseña.
  const iniciarSesion = async () => {
    setErrorUsuario(errorUsuarioInicial);
    try {
      
      let { data, error } = await supabase.auth.signInWithPassword({
        email: datosSesion.email,
        password: datosSesion.password
      })

      if (error) {
        throw error;
      } else {
        setErrorUsuario("Revisa tu correo electrónico para iniciar la sesión.");
      }

    } catch (error) {
      setErrorUsuario(error.message);
    }
  };

  //Función para cerrar sesión.
  const cerrarSesion = async () => {
    try {
      
      await supabase.auth.signOut();
      setErrorUsuario(errorUsuarioInicial);
    } catch (error) {
      setErrorUsuario(error.message);
    }
  };

  //Función para obtener el usuario.
  const obtenerUsuario = async () => {
    try {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        throw error;
      }
      setUsuario(data.user);
      setErrorUsuario(errorUsuarioInicial);

    } catch (error) {
      setErrorUsuario(error.message);
    }
  };

  //Función para obtener el usuario.
  const passwordOlvidada = async () => {
    try {
      let { data, error } = await supabase.auth.resetPasswordForEmail(datosSesion.email);

      if (error) {
        throw error;
      }
    } catch (error) {
      setErrorUsuario("Se le ha enviado un correo para restablecer la contraseña.");
    }
  };

  //Función para actualizar los datos.
  const actualizarDato = (evento) => {
    const { name, value } = evento.target;
    setDatosSesion({ ...datosSesion, [name]: value });
  };

  //Se gestiona la suscripción.
  useEffect(() => {
    
    const suscripcion = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          navegar("/");
          setSesionIniciada(true);
          obtenerUsuario();
        } else {
          navegar("/login");
          setSesionIniciada(false);
        }
      }
    );
  }, []);

  //Exportamos todos los datos.
  const datosAExportar = {
    errorUsuario,
    crearCuenta,
    iniciarSesion,
    cerrarSesion,
    passwordOlvidada,
    actualizarDato,
    sesionIniciada,
    usuario,
  };

  return (
    <>
    <contextoSesion.Provider value={datosAExportar}>
    {children}
    </contextoSesion.Provider>
    </>
  );
};

export default ProveedorSesion;
export { contextoSesion };