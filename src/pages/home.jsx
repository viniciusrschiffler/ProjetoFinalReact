import Container from '../components/container';
import Header from '../components/header';
import UserContainer from '../components/userContainer';
import UserPicture from '../components/userPicture';
import UserDetails from '../components/userDetails';
import Table from '../components/table/index';
import EditarPerfil from '../pages/Editar';
import EditarInfo from '../pages/Editar'


export default function Home() {
    return (
        <Container>
            <Header />
            <UserContainer>
                <UserPicture url="https://avatars.githubusercontent.com/u/89466535?v=4" alternativeText="image" />
                <UserDetails name="Ana Clara" login="#anaclarabull" bio="Minha Bio..." editar="Editar"/>
                <Table />
            </UserContainer>
            <EditarPerfil />
            <EditarInfo />
        </Container>
                        
        
    );
}