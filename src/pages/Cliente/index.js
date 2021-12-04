import { Card, Row, Col, Form, FloatingLabel } from "react-bootstrap";
import { Container, Divider } from "./styles";
import { useNavigate } from "react-router-dom";

import Btn from "./../../components/LoginButton";

function CadastroCliente() {

  const navigation = useNavigate()
  function handleSubmit(event) {
    event.preventDefault();
    let nomeCompleto = document.getElementById("nomeCompleto").value;
    let cpf = document.getElementById("cpf").value;
    let dataNascimento = document.getElementById("dataNascimento").value;
    let telefone = document.getElementById("telefone").value;
    let celular = document.getElementById("celular").value;
    let foto = document.getElementById("foto").value;
    let cep = document.getElementById("cep").value;
    let rua = document.getElementById("nomeRua").value;
    let numero = document.getElementById("numero").value;
    let complemento = document.getElementById("complemento").value;
    let bairro = document.getElementById("bairro").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;
    let email = document.getElementById("email").value;
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;

    let data = {
      nomeCompleto: nomeCompleto,
      cpf: cpf,
      dataNascimento: dataNascimento,
      telefone: telefone,
      celular: celular,
      foto: foto,
      nomeUsuario: userName,
      senha: password,
      email: email,

      endereco: {
        cep: cep,
        rua: rua,
        numero: numero,
        complemento: complemento,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
      }
    }
    let users = JSON.parse(localStorage.getItem("pessoas")) || []
    users.push(data)
    localStorage.setItem("pessoas", JSON.stringify(users));
    navigation("/")
  }

  return (
    <Container>
      <Card className="content-box">
        <Card.Body>
          <h2 className="mb-3 titulo">Dados pessoais</h2>
          <Row>
            <Col md>
              <FloatingLabel controlId="nomeCompleto" label="Nome completo" className="mb-3">
                <Form.Control type="text" id="nomeCompleto" placeholder=" " />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="g-3">
            <Col md>
              <FloatingLabel controlId="cpf" label="CPF" className="mb-3">
                <Form.Control type="text" id="cpf" placeholder=" " />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="dataNascimento" label="Data de Nascimento" className="mb-3">
                <Form.Control type="text" id="dataNascimento" placeholder=" " />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="g-3">
            <Col md>
              <FloatingLabel controlId="telefone" label="Telefone" className="mb-3">
                <Form.Control type="text" id="telefone" placeholder=" " />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="celular" label="Celular" className="mb-3">
                <Form.Control type="text" id="celular" placeholder=" " />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="g-3">
            <Col md>
              <FloatingLabel controlId="foto" label="Link Foto" className="mb-3">
                <Form.Control type="text" id="foto" placeholder="http://minhaFoto.com" />
              </FloatingLabel>
            </Col>
          </Row>

          <Divider />

          <h2 className="mb-3 titulo">Endereço</h2>
          <Row>
            <Col md={6}>
              <FloatingLabel controlId="cep" label="Cep" className="mb-3">
                <Form.Control type="text" id="cep" placeholder=" " />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="g-3">
            <Col md={10}>
              <FloatingLabel controlId="nomeRua" label="Rua" className="mb-3">
                <Form.Control type="text" id="nomeRua" placeholder=" " />
              </FloatingLabel>
            </Col>
            <Col md={2}>
              <FloatingLabel controlId="numero" label="Número">
                <Form.Control type="text" id="numero" placeholder=" " />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="g-3">
            <Col md>
              <FloatingLabel controlId="complemento" label="Complemento" className="mb-3">
                <Form.Control type="text" id="complemento" placeholder=" " />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="bairro" label="Bairro">
                <Form.Control type="text" id="bairro" placeholder=" " />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="g-3">
            <Col md>
              <FloatingLabel controlId="cidade" label="Cidade">
                <Form.Control type="text" id="cidade" placeholder=" " />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="estado" label="Estado">
                <Form.Control type="text" id="estado" placeholder=" " />
              </FloatingLabel>
            </Col>
          </Row>

          <Divider />

          <h2 className="mb-3 titulo">Dados de Login</h2>
          <Row className="g-3">
            <Col md>
              <FloatingLabel controlId="email" label="E-mail" className="mb-3">
                <Form.Control type="email" id="email" placeholder="usuario@dominio.com.br" />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="g-3">
            <Col md>
              <FloatingLabel controlId="userName" label="Nome de usuário" className="mb-3">
                <Form.Control type="text" id="userName" placeholder=" " />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="password" label="Senha" className="mb-5">
                <Form.Control type="password" id="password" placeholder=" " />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
            </Col>
            <Col md={6}>
              <Btn title="Salvar" url=" " handleFunction={e => { handleSubmit(e) }} ></Btn>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CadastroCliente;