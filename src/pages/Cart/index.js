import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './style.css'

import Table from '../../components/Table'
import Btn from "../../components/LoginButton";
import { Row, Col } from "react-bootstrap";




function Cart() {
  const MySwal = withReactContent(Swal)
  const data = [

    { id: 1, Filme: 'Titanic', Preço: 'R$29,99', Tipo: 'Compra' },
    { id: 2, Filme: 'Miranha', Preço: 'R$12,99', Tipo: 'Aluguel' },
    { id: 3, Filme: 'O nevoeiro', Preço: 'R$22,99', Tipo: 'Aluguel' }
  ]

  // const data = localStorage.getItem('cart')

  function alert() {
    MySwal.fire({
      title: <p>compra efetuada com SUCESSO!!</p>,
      footer: 'Copyright grupo 06',
    })
  }
  useEffect(() => {
    document.getElementById('limpar').addEventListener('click', () => {
      console.log('ooooo')
    })
  }, [])


  return (

    <div id="container">
      <div id="escritos">
        <div>
          <h2 id="limpar">
            limpar
          </h2>
        </div>

        <div id="title">
          <h1>Bem vindo Paulo!</h1>
        </div>

      </div>
      <div className="tabelao">
        <Table data={data} />
      </div>

      <div className="buttonsContainer">
        <div>
          {/* <Button id="Comprar" onClick={alert}>Comprar</Button> */}
          <Row>
            <Col md>
              <Btn id='Comprar' handleFunction={alert} input type='button' title="Comprar" url=''>Comprar</Btn>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col md>
              <Btn idButton='comp' input type='button' title="Comprar Mais" url="/home">Comprar Mais</Btn>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Cart