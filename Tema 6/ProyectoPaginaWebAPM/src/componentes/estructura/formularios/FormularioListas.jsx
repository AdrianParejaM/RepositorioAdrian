import React from 'react';
import useLista from "../../../hooks/useLista.jsx";

const FormularioListas = () => {

    //Traemos lo necesario del hook.
    const { nombreNuevaLista, setNombreNuevaLista, mostrarFormulario, setMostrarFormulario, manejarCrearLista } = useLista();

  return (
    <>
    {mostrarFormulario && (
        <div className="formulario">
          <input
            type="text"
            placeholder="Nombre de la lista..."
            /*He añadido el maxLength para que no haya problemas con la estructura del código si se ponen muchos caracteres.*/
            maxLength={20}
            value={nombreNuevaLista}
            onChange={(e) => setNombreNuevaLista(e.target.value)}
          />
          <div className="botones">
            <button className="crearNuevaLista" onClick={manejarCrearLista}>Crear</button>
            <button className="eliminar" onClick={() => setMostrarFormulario(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default FormularioListas;