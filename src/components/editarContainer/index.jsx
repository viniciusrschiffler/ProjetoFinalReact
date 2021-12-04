import { useNavigate } from "react-router-dom";
import {
  Section,
  Title,
  ListFormulario,
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button
} from './styles';

const EditarContainer = props => {
  const pessoa = JSON.parse(localStorage.getItem("usuarioLogado"))
  console.log(pessoa);
  const navigation = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    let email = document.getElementById("exampleEmail").value;
    let password = document.getElementById("examplePassword").value;
    let name = document.getElementById("exampleAddress").value;
    let fullName = document.getElementById("exampleAddress2").value;
    let city = document.getElementById("exampleCity").value;
    let date = document.getElementById("exampleState").value;

    let lastPass = pessoa.senha
    let lastName = pessoa.name 
    let lastEmail = pessoa.email

    if (email !== '') {
      pessoa.email = email;
    }

    if (password !== '') {
      pessoa.senha = password;
    }

    if (name !== '') {
      pessoa.name = name;
    }

    if (fullName !== '') {
      pessoa.nomeCompleto = fullName;
    }

    if (city !== '') {
      pessoa.endereco.cidade = city;
    }

    if (date !== '') {
      pessoa.dataNascimento = date;
    }

    

    let users = JSON.parse(localStorage.getItem("pessoas"))

    let updatedUsers = users.map(user => {
      if (user.email === lastEmail && user.senha === lastPass && user.nomeUsuario === lastName) {
        return pessoa
      }
      return user
    })

    localStorage.setItem("usuarioLogado", JSON.stringify(pessoa));
    localStorage.setItem("pessoas", JSON.stringify(updatedUsers));

    navigation("/perfil")
  }
  return (
    <Section>
      <Title>Editar Dados</Title>
      <ListFormulario>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">
                  E-mail
                </Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="E-mail"
                  type="email"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">
                  Senha
                </Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="Senha"
                  type="password"
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="exampleAddress">
              Nome de Usuário
            </Label>
            <Input
              id="exampleAddress"
              name="address"
              placeholder="@username"

            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleAddress2">
              Nome Completo
            </Label>
            <Input
              id="exampleAddress2"
              name="address2"
              placeholder="Nome Sobrenome"
            />
          </FormGroup>
          <Row form>
            <Col md={3}>
              <FormGroup>
                <Label for="exampleCity">
                  Telefone
                </Label>
                <Input
                  id="exampleCity"
                  name="city"
                  type="tel"
                  placeholder="(XX)XXXXX-XXXX"

                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="exampleState">
                  Data de Nascimento
                </Label>
                <Input
                  id="exampleState"
                  name="state"
                  type="date"
                  placeholder="dd/mm/aaaa"

                />
              </FormGroup>
            </Col>
            <Col md={6}>
            </Col>
          </Row>
          <Button onClick={e => { handleSubmit(e) }}>
            <h2>Atualizar</h2>
          </Button>
        </Form>
      </ListFormulario>  {/*vai entrar o bootstrap da Dani*/}
      <Form /> {/*infos bootstrap, tem foto do original no cel - 54 min do video-*/}
    </Section>
  );
}

export default EditarContainer;
