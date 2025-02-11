import { useState, useEffect, useContext } from "react";
import useSesion from "../../hooks/useSesion.jsx";
import useLista from "../../hooks/useLista.jsx";
import "./ListasCompra.css";
import FormularioListas from "../estructura/formularios/FormularioListas.jsx";

const ListasCompra = () => {

  //Importamos lo necesario con los hooks.
  const { usuario } = useSesion();
  const { obtenerListas, borrarLista, listas, setMostrarFormulario } = useLista();


  // Obtener las listas al cargar la página.
  useEffect(() => {
    if (usuario?.id) {
      obtenerListas(usuario.id);
    }
  }, [usuario, obtenerListas]);


  return (
    <div className="container">
      <h2 className="listado_titulo">Mis Listas de Compra</h2>
  
      <button className="navegacion__enlace" onClick={() => setMostrarFormulario(true)}>
        Crear Nueva Lista
      </button>

      <FormularioListas />
  
      <ul className="listas-container">
        {listas.length > 0 ? (
          listas.map((lista) => (
            <li className="lista-item" key={lista.idLista}>
              {lista.nombreLista}
              <button className="eliminar" onClick={() => borrarLista(lista.idLista, usuario.id)}>Eliminar</button>
            </li>
          ))
        ) : (
          <p className="textoSinListas">No tienes ninguna lista de la compra creada de momento.</p>
        )}
      </ul>
    </div>
  );
};

export default ListasCompra;
