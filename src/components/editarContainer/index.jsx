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
          placeholder="dd/mm/aaaa"
        />
      </FormGroup>
    </Col>
    <Col md={2}>
    </Col>
  </Row>
  <Button>
    <h1>Atualizar</h1>
  </Button>
</Form>
            </ListFormulario>  {/*vai entrar o bootstrap da Dani*/}
            <Form /> {/*infos bootstrap, tem foto do original no cel - 54 min do video-*/}
        </Section>
    );
}

export default EditarContainer;
