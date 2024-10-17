import { useState } from 'react'
import './App.css';
import Numericos from './Numericos.jsx';
import Parrafico from './Parrafico.jsx';
import Contadorico from './Contadorico.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Practica 3.04</h1>
      <Numericos />
      <Parrafico />
      <Contadorico />
    </>
  )
}

export default App
