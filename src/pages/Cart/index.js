import React from 'react'

import './style.css'

import Table from '../../components/Table'
import Button from '../../components/CartButton'


function Cart() {

  const data = [
    { id: 1, Filme: 'Titanic', Preco: 'R$29,99', Tipo: 'Compra' },
    { id: 2, Filme: 'Miranha', Preco: 'R$12,99', Tipo: 'Aluguel' },
    { id: 3, Filme: 'O nevoeiro', Preco: 'R$22,99', Tipo: 'Aluguel' }
  ]
  return (
    <div id="container">

      <div className="tabelao">
        <Table data={data} />
      </div>

      <div id="buttonsContainer">
        <Button>Comprar</Button>
        <Button background="#114696" >Comprar Mais</Button>
      </div>

    </div>
  )
}



export default Cart