"use strict";

//Importamos todo lo necesario para este ejercicio.
import {insertarNuevoUsuario, usuarios, usuariosMayoresEdad, usuariosCorreoYahoo, usuariosTemaClaro, usuariosFaltaInformacion, anyadirApellidos, anyadirCodigo} from "./Biblioteca/funcionesCuartaPractica.js";

//Insertar nuevo usuario.
  let nuevoUsuario = {

    nombre: "Chemita",
    preferencias: { tema: "oscuro", idioma: "español", edad: 21 },
    contacto: {
      direccion: {
        calle: "Calle 13, 13",
        localidad: "Elda",
        pais: "España",
      },
      correoelectronico: "nuevocorreo@gmail.com",
      telefono: "123456789",
    },
  };

  //Muestra los usuarios actualizados.
  insertarNuevoUsuario(nuevoUsuario);

  //Muestra los alumnos mayores de 18.
  usuariosMayoresEdad();

  //Muestra usuarios con el correo de Yahoo.
  usuariosCorreoYahoo();

  //Usuarios filtrados con tema claro, mayores de edad y españoles.
  usuariosTemaClaro();

  //Mostrar usuarios que le faltan información.
  usuariosFaltaInformacion();

  //Añadir a los usuarios apellidos que el valor por defecto será "No indicado";
  anyadirApellidos();

  //Añadir nueva entrada a dirección llamada código y el valor por defecto será "00000".
  anyadirCodigo();


