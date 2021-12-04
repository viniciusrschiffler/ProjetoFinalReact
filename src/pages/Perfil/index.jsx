import Container from '../../components/container';
import Header from '../../components/header';
import UserContainer from '../../components/userContainer';
import UserPicture from '../../components/userPicture';
import UserDetails from '../../components/userDetails';
import Table from '../../components/Table';
import Edit from '../../components/edit'
import Navbar from '../../components/Navbar';


export default function Home() {

    const pessoa = JSON.parse(localStorage.getItem("usuarioLogado"))
    const filmes = JSON.parse(localStorage.getItem("filmes"))

    return (
        <>
            <Navbar />

            <Container>
                <Header />
                <UserContainer>
                    <UserPicture url={pessoa.foto} alternativeText="image" />
                    <UserDetails name={pessoa.nomeCompleto} login={pessoa.nomeUsuario} bio={pessoa.cidade} />
                    <Table movies={filmes} />
                    <Edit />
                </UserContainer>
            </Container>
        </>


    );
}