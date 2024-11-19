import { useState } from 'react';
import './App.css';
import MontarLocalizador from './ComponentesPrincipales/MontarLocalizador.jsx';
import MontarColorines from './ComponentesPrincipales/MontarColorines.jsx';
import MontarContador from './ComponentesPrincipales/MontarContador.jsx';
import MontarCronometro from './ComponentesPrincipales/MontarCronometro.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MontarLocalizador />
      <MontarColorines />
      <MontarContador />
      <MontarCronometro />
    </>
  );
};

export default App;
