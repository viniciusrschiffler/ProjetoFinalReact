import { FiSearch, FiChevronDown } from 'react-icons/fi'

import {
    Container,
    LogoContainer,
    Logo,
    LinksContainer,
    Link,
    GenresContainer,
    NavInputContainer,
    NavInput,
    searchIcon,
    ProfileContainer,
    ProfileImage,
    ProfileImageContainer,
    arrowDown,
    HiddenItemsContainer,
    HiddenItems
} from './styles'

import LogoImage from '../../assets/Logo.png'

function Navbar() {

    return (
        <Container>
            <LogoContainer>
                <Logo src={LogoImage} alt="Logo" />
            </LogoContainer>

            <LinksContainer>
                <Link to="/" >Inicio</Link>
                
                <GenresContainer> 
                    <Link to="/">Gêneros <FiChevronDown style={arrowDown} /></Link>

                    <HiddenItemsContainer id="genres-hidden-items">
                        <HiddenItems to="/">Ação</HiddenItems>
                        <HiddenItems to="/">Aventura</HiddenItems>
                        <HiddenItems to="/">Comédia</HiddenItems>
                    </HiddenItemsContainer>

                </GenresContainer>
                

                <NavInputContainer>
                    <NavInput placeholder="Procure um filme..." />
                    <FiSearch style={searchIcon} />
                </NavInputContainer>

                <ProfileContainer>

                    <ProfileImageContainer>
                        <ProfileImage src="https://avatars.githubusercontent.com/u/61471521?v=4" alt="Foto de perfil" />
                        <FiChevronDown style={arrowDown} />
                    </ProfileImageContainer>

                    <HiddenItemsContainer id="profile-hidden-items">
                        <HiddenItems to="/">Perfil</HiddenItems>
                        <HiddenItems to="/">Carrinho</HiddenItems>
                        <HiddenItems id="sair" to="/">Sair</HiddenItems>
                    </HiddenItemsContainer>

                </ProfileContainer>


            </LinksContainer>
        </Container>
    )
}

export default Navbar;