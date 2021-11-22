import React from 'react'
import Table from './Table'
import './Table.css'
import Button from './components/Button'
import './components/Button/comprar.css'
import Nome from './components/Nome'
//import { minuscircleo } from 'react-icons/cg'


function App() {

  const data = [
    { id: 1, Filme: 'Titanic', Preco: 'R$29,99', Tipo: 'Compra' },
    { id: 2, Filme: 'Miranha', Preco: 'R$12,99', Tipo: 'Aluguel' },
    { id: 3, Filme: 'O nevoeiro', Preco: 'R$22,99', Tipo: 'Aluguel' }
  ]
  return (
    <>
      <div className="tabelao"><Table data={data} /></div>
      <div id="comprar"><Button>Comprar</Button></div>
      <div id="add"><Button>Comprar Mais</Button></div>
    </>
  )
}



export default App