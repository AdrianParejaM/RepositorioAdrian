                {/*Hacer el formulario en un componente aparte para poder usarlo en insertar y editar*/}
                {/*Usar useNavigate para redirigir a la página de camisetas una vez hecho clic en boton*/}
import React, { useContext } from "react";
import { contextoProductos } from "../../contextos/ProveedorProductos.jsx";
import "./InsertarCamiseta.css";


const InsertarCamiseta = () => {

    const { actualizarDato, insertarCamisetas } = useContext(contextoProductos);

  return (
    <>
    <h2 className='listado_titulo'>Insertar camiseta</h2>
      <label htmlFor='nombreProducto'>Nombre del producto</label>
      <input
        type='text'
        name='nombreProducto'
        id='nombreProducto'
        placeholder='Nombre del producto...'
        onChange={(e) => {
          actualizarDato(e);
        }}
      />
      <label htmlFor='peso'>Peso del producto</label>
      <input
        type='number'
        name='peso'
        id='peso'
        placeholder='Peso del producto...'
        min={0}
        onChange={(e) => {
          actualizarDato(e);
        }}
      />
      <label htmlFor='precio'>Precio del producto</label>
      <input
        type='number'
        name='precio'
        id='precio'
        placeholder='Precio del producto...'
        min={0}
        onChange={(e) => {
          actualizarDato(e);
        }}
      />
      <label htmlFor='imagen'>Imágen del producto</label>
      <input
        type='text'
        name='imagen'
        id='imagen'
        placeholder='Insere URL de la imágen...'
        onChange={(e) => {
          actualizarDato(e);
        }}
      />
      <label htmlFor='descripcion'>Descripción del producto</label>
      <input
        type='text'
        name='descripcion'
        id='descripcion'
        placeholder='Descripción del producto...'
        onChange={(e) => {
          actualizarDato(e);
        }}
      />
      <button
        className='boton_insertar_camiseta'
        onClick={(e) => {
            insertarCamisetas();
        }}
      >
        Insertar Camiseta
      </button>
    </>
  );
};

export default InsertarCamiseta;