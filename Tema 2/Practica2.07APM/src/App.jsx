import './App.css'
import Contenedor from './Contenedor.jsx';
import Interprete from './Interprete.jsx';

function App() {


  return (
    <>
    <p>Encima del contenedor</p>
      <Contenedor>
        <Interprete nombre="Feo" foto="https://thumbs.dreamstime.com/z/hombre-feo-elegante-48706154.jpg">
          Esta es la biografía de feo.
        </Interprete>
        </Contenedor>
      <p>Debajo del contenedor</p>
    </>
  );
};

export default App;
