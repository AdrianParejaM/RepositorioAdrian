import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/supabase.js";

const contextoListas = createContext();

const ProveedorListas = ({children}) => {

    const datosAExportar = {
        
    };

  return (
    <>
    <contextoListas.Provider value={datosAExportar}>
        {children}
    </contextoListas.Provider>
    </>
  );
};

export default ProveedorListas;