import React, {useContext} from 'react';
import { contextoProductos } from '../contextos/ProveedorProductos.jsx';

const useProducto = () => {

    const contexto = useContext(contextoProductos);

  return contexto;
}

export default useProducto;