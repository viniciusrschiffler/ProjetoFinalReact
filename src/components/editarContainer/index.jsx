import {useNavigate} from "react-router-dom";
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
    const pessoa=JSON.parse(localStorage.getItem("pessoa"))
    const navigation=useNavigate()

    function handleSubmit (e){
        e.preventDefault();
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
          value={pessoa.email}
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
          value={pessoa.senha}
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
      value={pessoa.nomeUsuario}

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
      value={pessoa.nomeCompleto}
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
          value={pessoa.telefone}
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
          value={pessoa.dataNascimento}
          
        />
      </FormGroup>
    </Col>
    <Col md={6}>
    </Col>
  </Row>
  <Button onClick={e=>{handleSubmit(e)}}>
    <h2>Atualizar</h2>
  </Button>
</Form>
            </ListFormulario>  {/*vai entrar o bootstrap da Dani*/}
            <Form /> {/*infos bootstrap, tem foto do original no cel - 54 min do video-*/}
        </Section>
    );
}

export default EditarContainer;
