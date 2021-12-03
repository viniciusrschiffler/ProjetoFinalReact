import Container from '../components/container';
import Header from '../components/header';
import UserContainer from '../components/userContainer';
import UserPicture from '../components/userPicture';
import UserDetails from '../components/userDetails';
import Table from '../components/table/index';
import Edit from '../components/edit'


export default function Home() {
    localStorage.setItem("pessoa", JSON.stringify({
    celular: "2321323232",
    cpf: "2121223443",
    endereco: {
    bairro: "Estrada da Saudade",
    cep: "2323232",
    complemento: "casa maneira",
    estado: "Rj da massa",
    numero: "471",
    rua: "onde so tem gente maneira",
    },
    foto: "https://avatars.githubusercontent.com/u/61471521?v=4",
    nomeCompleto: "Vinicius",
    nomeUsuario: "vini",
    cidade: "Petropolis",
    senha: "1234",
    email: "vinicius@gmail.com",
    telefone: "98287172",
    dataNascimento: "29/10/2003",
    }
    ))
    const pessoa=JSON.parse(localStorage.getItem("pessoa"))
    return (
        <Container>
            <Header />
            <UserContainer>
                <UserPicture url={pessoa.foto} alternativeText="image" />
                <UserDetails name={pessoa.nomeCompleto} login={pessoa.nomeUsuario} bio={pessoa.cidade} />
                <Table />
                <Edit />
            </UserContainer>
        </Container>
                        
        
    );
}