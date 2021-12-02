import { Card, Row, Col, Form, FloatingLabel } from "react-bootstrap";
import { Container } from "./styles";
import Btn from "../../components/LoginButton";

import Logo from "../../img/Logo.png";

function Login() {

 function handleSubmit() {
   let userName=document.getElementById("nomeUsuario").value;
   let password=document.getElementById("senha").value;
  }
  return (
    <Container>
    
      <img src={Logo} alt="Fifi Filmes" className="img-fluid mb-5" />
      <Card className="content-box content-box-login borda-arredondada">
        <Card.Body>
          <h2 className="mb-3 titulo">Digite seu nome de usuário</h2>
          <Row>
            <Col md>
              <FloatingLabel controlId="nomeUsuario" label="Usuário" className="mb-3" >
                <Form.Control type="text" id="nomeUsuario" placeholder=" " />
              </FloatingLabel>
            </Col>
          </Row>
          <h2 className="mb-3 titulo">Digite sua senha</h2>
          <Row>
            <Col md>
              <FloatingLabel controlId="senha" label="Senha" className="mb-3">
                <Form.Control type="password" id="senha" placeholder=" " />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col md>
              <Btn title="Acessar" url="/" className="mb-3" handleFunction={handleSubmit} ></Btn>
            </Col>
            <Col md>
              <Btn title="Cadastrar" url="/cliente/cadastro"></Btn>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;
