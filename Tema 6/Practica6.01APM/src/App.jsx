import "./App.css";
import CabeceraLogin from "./componentes/estructura/CabeceraLogin.jsx";
import Contenido from "./componentes/estructura/Contenido.jsx";
import Menu from "./componentes/estructura/Menu.jsx";
import Pie from "./componentes/estructura/Pie.jsx";
import RutasUT06 from "./componentes/UT06/rutas/RutasUT06.jsx";
import ProveedorSesion from "./contextos/ProveedorSesion.jsx";

function App() {
  return (
    <>
      <ProveedorSesion>
        <CabeceraLogin />
        <Menu />
        <Contenido>
          <RutasUT06 />
        </Contenido>
        <Pie />
      </ProveedorSesion>
    </>
  );
}

export default App;
