import React from "react";
import "./Pie.css";

const Pie = () => {

  //Página del pie.
  
  return (
    <footer id="pie">
      <div className="pie-content">
        <p>© 2025 CamisFutbol. Todos los derechos reservados.</p>
        <nav className="pie-nav">
          <p>Acerca de</p>
          <p>Contacto</p>
          <p>Política de Privacidad</p>
        </nav>
      </div>
    </footer>
  );
};

export default Pie;
