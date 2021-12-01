import { Card, Row, Col, Form, FloatingLabel } from "react-bootstrap";
import { Container } from "./styles";
import Btn from "../../components/LoginButton";

import Logo from "../../assets/Logo.png";

function Login() {
  return (
    <Container>
      <img src={Logo} alt="Fifi Filmes" class="img-fluid mb-5" />
      <Card className="content-box content-box-login borda-arredondada">
        <Card.Body>
          <h2 className="mb-3 titulo">Digite seu nome de usuário</h2>
          <Row>
            <Col md>
              <FloatingLabel
                controlId="nomeUsuario"
                label="Usuário"
                className="mb-3"
              >
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
              <Btn label="Acessar" url="/products" className="mb-3"></Btn>
            </Col>
            <Col md>
              <Btn label="Cadastrar" url="/cliente/cadastro"></Btn>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;
