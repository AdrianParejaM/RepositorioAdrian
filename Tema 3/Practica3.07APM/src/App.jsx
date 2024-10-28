import './App.css';
import Cabecera from "./componentes/Cabecera.jsx";
import Menu from "./componentes/Menu.jsx";
import Pie from "./componentes/Pie.jsx";
import Rutas from "./componentes/Rutas.jsx";

function App() {
  

  return (
    <>
      <div className='contenedor'></div>
      <Cabecera /> 
      <Menu />
      <Rutas />
      <Pie />
    </>
  )
};

export default App;
