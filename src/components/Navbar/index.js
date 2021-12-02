import { useState } from 'react'
import { FiSearch, FiChevronDown, FiMenu } from 'react-icons/fi'

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
    HiddenItems,
    menuIcon
} from './styles'

import LogoImage from '../../assets/Logo.png'

function Navbar() {
    const windowWith = window.innerWidth;

    const [containerDisplay, setContainerDisplay] = useState(
        windowWith <= 1100 ? 'none' : 'flex'
    )

    function handleMenuClick() {
        setContainerDisplay(containerDisplay === 'none' ? 'flex' : 'none')
    }

    function renderGenresElement() {
        return (
            <GenresContainer>
                <Link id="GenresLink" to="/">Gêneros <FiChevronDown style={arrowDown} /></Link>

                <HiddenItemsContainer id="genres-hidden-items">
                    <HiddenItems to="/">Ação</HiddenItems>
                    <HiddenItems to="/">Aventura</HiddenItems>
                    <HiddenItems to="/">Comédia</HiddenItems>
                </HiddenItemsContainer>

            </GenresContainer>
        )
    }

    return (
        <>
            {
                windowWith <= 1100
                    ? <FiMenu style={menuIcon} onClick={handleMenuClick} />
                    : null
            }

            <Container style={{ display: containerDisplay }}>
                <LogoContainer>
                    <Logo src={LogoImage} alt="Logo" />
                </LogoContainer>

                <LinksContainer>
                    

                    {
                    windowWith <= 1100
                    ?   
                        (
                            <>
                                {renderGenresElement()}
                                <Link id="home" to="/" >Inicio</Link>
                            </>
                        )
                    :   
                        (
                            <>
                                <Link id="home" to="/" >Inicio</Link>
                                {renderGenresElement()}
                            </>
                            
                        )
                    }



                    <NavInputContainer>
                        <NavInput placeholder="Procure um filme..." />
                        <FiSearch style={searchIcon} />
                    </NavInputContainer>

                    <ProfileContainer>

                        <ProfileImageContainer>
                            <ProfileImage src="https://avatars.githubusercontent.com/u/61471521?v=4" alt="Foto de perfil" />
                            {windowWith > 1100
                                ? <FiChevronDown style={arrowDown} />
                                : null}
                        </ProfileImageContainer>

                        <HiddenItemsContainer id="profile-hidden-items">
                            <HiddenItems className='profileHiddenLink' to="/">Perfil</HiddenItems>
                            <HiddenItems className='profileHiddenLink' to="/">Carrinho</HiddenItems>
                            <HiddenItems className='profileHiddenLink' id="sair" to="/">Sair</HiddenItems>
                        </HiddenItemsContainer>

                    </ProfileContainer>


                </LinksContainer>
            </Container>
        </>
    )
}

export default Navbar;