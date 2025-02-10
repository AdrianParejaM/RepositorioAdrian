import './App.css';
import ProveedorSesion from './contextos/ProveedorSesion.jsx';
import CabecerayLogin from './componentes/estructura/CabecerayLogin.jsx';
import Menu from './componentes/estructura/Menu.jsx';
import Contenido from './componentes/estructura/Contenido.jsx';
import Rutas from './componentes/rutas/Rutas.jsx';
import Pie from './componentes/estructura/Pie.jsx';
import ProveedorProductos from './contextos/ProveedorProductos.jsx';
import { ProveedorListas } from './contextos/ProveedorListas.jsx';

function App() {

  return (
    <>
    <ProveedorSesion>
      <ProveedorListas>
        <CabecerayLogin />
        <Menu />
        <ProveedorProductos>
        <Contenido>
          <Rutas />
        </Contenido>
        </ProveedorProductos>
        <Pie />
      </ProveedorListas>
    </ProveedorSesion>
    </>
  );
};

export default App;
