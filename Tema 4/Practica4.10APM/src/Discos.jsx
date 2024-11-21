import React, { useState } from "react";
import "./Discos.css";
import Errores from "./complementos/Errores.jsx";

const Discos = () => {
  //Se crea un estado inicial.
  const disco = {
    nombreDisco: "",
    grupo: "",
    anio: "",
    tipo: "rock",
    localizacion: "",
  };

  // Estado para los valores del disco.
  const [valoresDisco, setValoresDisco] = useState(disco);

  // Estado para la lista de discos.
  const [discos, setDiscos] = useState([]);

  // Estado para controlar si mostrar los discos.
  const [mostrarListado, setMostrarListado] = useState(false);

  //Estado para los errores.
  const erroresIniciales = [];
  const [errores, setErrores] = useState(erroresIniciales);

  // Función para actualizar los valores del disco.
  const actualizarDatos = (evento) => {
    const { name, value } = evento.target;
    setValoresDisco({ ...valoresDisco, [name]: value });
  };

  // Validaciones.
  const validarDato = (elemento) => {
    const { name, value } = elemento;
    let erroresElemento = [];

    // Validar nombre del disco.
    if (name === "nombreDisco") {
      if (!value.length) {
        erroresElemento = [
            ...erroresElemento,
            "El nombre del disco es obligatorio.",
        ];
      }
      if (value.length < 5) {
        erroresElemento = [
            ...erroresElemento,
            "El nombre del disco debe tener al menos 5 caracteres.",
        ];
      }
    }

    // Validar grupo.
    if (name === "grupo") {
      if (!value.length) {
        erroresElemento = [
            ...erroresElemento,
            "El grupo o intérprete es obligatorio.",
        ];
      }
      if (value.length < 5) {
        erroresElemento = [
            ...erroresElemento,
            "El grupo o intérprete debe tener al menos 5 caracteres.",
        ];
      }
    }

    // Validar año.
    if (name === "anio") {
      if (!value.length) {
        erroresElemento = [
            ...erroresElemento,
            "El año de publicación es obligatorio.",
        ];
      }
      if (!/^\d{4}$/.test(value)) {
        erroresElemento = [
            ...erroresElemento,
            "El año de publicación debe ser un número de 4 dígitos.",
        ];
      }
    }

    // Validar tipo de música(hago la verificación pero realmente no hace falta ya que se selecciona rock por defecto y no hay opción a dejarlo vacío.).
    if (name === "tipo") {
      if (!value) {
        erroresElemento = [
            ...erroresElemento,
            "Debe seleccionar un tipo de música.",
        ];
      }
    }

    // Validar localización.
    if (name === "localizacion") {
      if (!value.length) {
        erroresElemento = [
            ...erroresElemento,
            "La localización es obligatoria.",
        ];
      }
      //Para hacer esta verificación me ayudó el GPT.
      if (!/^ES-\d{3}[A-Z]{2}$/.test(value)) {
        erroresElemento = [
            ...erroresElemento,
            "La localización debe tener el formato ES-001AA.",
        ];
      }
    }

    return erroresElemento;
  };

  // Validar formulario completo.
  const validarFormulario = (evento) => {
    evento.preventDefault();
    const formulario = evento.target.form;
    let erroresListado = [];

    // Validar cada campo del formulario.
    for (let i = 0; i < formulario.elements.length - 2; i++) {
      const erroresElemento = validarDato(formulario.elements[i]);

      if (erroresElemento.length > 0) {
        formulario.elements[i].classList.add("error");
      } else {
        formulario.elements[i].classList.remove("error");
      }

      erroresListado = [...erroresListado, ...erroresElemento];
    }

    setErrores(erroresListado);
    return erroresListado.length === 0;
  };

  // Función para guardar los discos.
  const guardarDisco = (evento) => {
    if (validarFormulario(evento)) {
      const nuevoDisco = { ...valoresDisco, prestado: false };
      setDiscos([...discos, nuevoDisco]);
      setValoresDisco(disco);
      setErrores(erroresIniciales);
    }
  };

  // Función para mostrar/ocultar los discos.
  const mostrarDisco = () => {
    mostrarListado === false ? setMostrarListado(true) : setMostrarListado(false); 
  };

  return (
    <>
    <h1>Colección de discos</h1>
      <form>
        <label htmlFor="nombreDisco">Nombre del Disco:</label>
        <input
          name="nombreDisco"
          className="nombreDisco"
          type="text"
          value={valoresDisco.nombreDisco}
          onChange={(evento) => {
            actualizarDatos(evento);
          }}
          required
        />
        <br />
        <label htmlFor="grupo">Grupo o Intérprete:</label>
        <input
          name="grupo"
          className="grupo"
          type="text"
          value={valoresDisco.grupo}
          onChange={(evento) => {
            actualizarDatos(evento);
          }}
          required
        />
        <br />
        <label htmlFor="anio">Año de Publicación:</label>
        <input
          name="anio"
          className="anio"
          type="number"
          value={valoresDisco.anio}
          onChange={(evento) => {
            actualizarDatos(evento);
          }}
          min="1900"
          max="2099"
          required
        />
        <br />
        <label htmlFor="tipo">Tipo de Música:</label>
        <select
          name="tipo"
          className="tipo"
          value={valoresDisco.tipo}
          onChange={(evento) => {
            actualizarDatos(evento);
          }}
          required
        >
          <option value="rock">Rock</option>
          <option value="progressive">Progressive</option>
          <option value="punk">Punk</option>
          <option value="trash">Trash</option>
        </select>
        <br />
        <label htmlFor="localizacion">Localización (Estantería):</label>
        <input
          name="localizacion"
          className="localizacion"
          type="text"
          value={valoresDisco.localizacion}
          onChange={(evento) => {
            actualizarDatos(evento);
          }}
          required
        />
        <br />
        <input
          type="button"
          className="guardar"
          value="Guardar"
          onClick={(evento) => {
            guardarDisco(evento);
          }}
        />
        <input
          type="button"
          className="mostrar"
          value="Mostrar"
          onClick={mostrarDisco}
        />
      </form>

      <Errores erroresMostrar={errores}/>

      {mostrarListado && (
        <div id="listadoDiscos">
          {discos.map((disco, index) => (
            <div key={index} className="disco">
              <p>Nombre:{disco.nombreDisco}</p>
              <p>Grupo o Intérprete: {disco.grupo}</p>
              <p>Año de Publicación: {disco.anio}</p>
              <p>Tipo de Música: {disco.tipo}</p>
              <p>Localización: {disco.localizacion}</p>
              <p>Prestado: {disco.prestado ? "Sí" : "No"}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Discos;
