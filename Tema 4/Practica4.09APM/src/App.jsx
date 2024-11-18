import { useState } from 'react';
import './App.css';
import MontarLocalizador from '../ComponentesPrincipales/MontarLocalizador';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MontarLocalizador />
    </>
  );
};

export default App;
