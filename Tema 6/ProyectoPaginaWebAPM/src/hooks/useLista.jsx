import React, {useContext} from 'react';
import { contextoListas } from '../contextos/ProveedorListas.jsx';

const useLista = () => {

  //Traemos todo de las listas.
    const contexto = useContext(contextoListas);

  return contexto;
}

export default useLista;