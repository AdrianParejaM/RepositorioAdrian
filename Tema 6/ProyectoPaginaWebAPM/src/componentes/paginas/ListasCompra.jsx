import { useState, useEffect, useContext } from "react";
import useSesion from "../../hooks/useSesion.jsx";
import { contextoListas } from "../../contextos/ProveedorListas.jsx";


const ListasCompra = () => {

    //Importamos lo necesario.
    const { obtenerListas, crearLista, borrarLista, listas } = useContext(contextoListas);

  const { usuario } = useSesion();
  const [nombreNuevaLista, setNombreNuevaLista] = useState(""); 
  const [mostrarFormulario, setMostrarFormulario] = useState(false); 

  // Obtener las listas al cargar la página
  useEffect(() => {
    if (usuario?.id) {
      obtenerListas(usuario.id);
    }
  }, [usuario, obtenerListas]); // Se ejecuta cuando el usuario cambia

  const handleCrearLista = async () => {
    if (!nombreNuevaLista.trim()) {
      alert("El nombre de la lista no puede estar vacío");
      return;
    }
    await crearLista(nombreNuevaLista, usuario.id);
    setNombreNuevaLista(""); 
    setMostrarFormulario(false); 
  };

  return (
    <div>
      <h2>Mis Listas de Compra</h2>

      {/* Botón para mostrar el formulario */}
      <button onClick={() => setMostrarFormulario(true)}>Crear Nueva Lista</button>

      {/* Formulario para ingresar el nombre de la nueva lista */}
      {mostrarFormulario && (
        <div>
          <input
            type="text"
            placeholder="Nombre de la lista"
            value={nombreNuevaLista}
            onChange={(e) => setNombreNuevaLista(e.target.value)}
          />
          <button onClick={handleCrearLista}>Crear</button>
          <button onClick={() => setMostrarFormulario(false)}>Cancelar</button>
        </div>
      )}

      {/* Listado de listas */}
      <ul>
        {listas.length > 0 ? (
          listas.map((lista) => (
            <li key={lista.idLista}>
              {lista.nombreLista}
              <button onClick={() => borrarLista(lista.idLista, usuario.id)}>Eliminar</button>
            </li>
          ))
        ) : (
          <p>No tienes listas de compra aún.</p> // Mensaje si no hay listas
        )}
      </ul>
    </div>
  );
};

export default ListasCompra;
