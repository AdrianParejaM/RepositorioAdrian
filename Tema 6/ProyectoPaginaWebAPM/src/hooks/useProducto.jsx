import React, {useContext} from 'react';
import { contextoProductos } from '../contextos/ProveedorProductos.jsx';

const useProducto = () => {
  
    //Traemos todo de productos.
    const contexto = useContext(contextoProductos);

  return contexto;
}

export default useProducto;