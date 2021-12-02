import { Card, Row, Col, Form, FloatingLabel } from "react-bootstrap";
import { Container, Divider } from "./styles";

import Btn from "./../../components/LoginButton";

function CadastroCliente() {
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
              <FloatingLabel controlId="telefone" label="Telefone">
                <Form.Control type="text" id="telefone" placeholder=" " />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="celular" label="Celular">
                <Form.Control type="text" id="celular" placeholder=" " />
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
              <FloatingLabel controlId="nomeUsuario" label="Nome de usuário" className="mb-3">
                <Form.Control type="text" id="nomeUsuario" placeholder=" " />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="senhaUsuario" label="Senha" className="mb-5">
                <Form.Control type="password" id="senhaUsuario" placeholder=" " />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
            </Col>
            <Col md={6}>
              <Btn title="Salvar" url="/products"></Btn>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CadastroCliente;