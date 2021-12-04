import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './style.css'

import Table from '../../components/Table'
import Btn from "../../components/LoginButton";
import { Row, Col } from "react-bootstrap";
import Navbar from '../../components/Navbar'




function Cart() {
  const MySwal = withReactContent(Swal)

  const [TableData, setTableData] = useState([]);


  const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))

  // const data = localStorage.getItem('cart')

  function limpar() {
    localStorage.removeItem('filmes')
    setTableData([])
  }

  function alert() {
    MySwal.fire({
      icon: 'success',
      title: <p>compra efetuada com SUCESSO!!</p>,
      footer: 'Copyright grupo 06',
    })
  }

  function handleBuy() {
    alert()
    limpar()
  }


  useEffect(() => {
    let BruteData = JSON.parse(localStorage.getItem('filmes')) || []

    let data = BruteData.map(item => JSON.stringify(item))
    data = data.filter((este, i) => data.indexOf(este) === i);
    data = data.map(item => JSON.parse(item))

    setTableData(data)

    document.getElementById('limpar').addEventListener('click', limpar)

  }, [])


  return (
    <>
      <Navbar />
      <div id="container">
        <div id="escritos">
          <div>
            <h2 id="limpar">
              limpar
            </h2>
          </div>

          <div id="title">
            <h1>Bem vindo {usuarioLogado.nomeCompleto}!</h1>
          </div>

        </div>
        <div className="tabelao">
          {
            TableData.length !== 0 ? <Table movies={TableData} /> : null
          }

        </div>

        <div className="buttonsContainer">
          <div>
            {/* <Button id="Comprar" onClick={alert}>Comprar</Button> */}
            <Row>
              <Col md>
                <Btn id='Comprar' style={{marginRight: '80px'}} handleFunction={handleBuy} input type='button' title="Comprar" url=''>Comprar</Btn>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col md>
                <Btn idButton='comp' style={{marginLeft: '40px'}} type='button' title="Comprar Mais" url="/home">Comprar Mais</Btn>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart