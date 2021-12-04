import { useEffect, useState } from 'react'
import { FiSearch, FiChevronDown, FiMenu } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

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

import LogoImage from '../../img/Logo.png'

function Navbar() {

    const windowWith = window.innerWidth;
    const mavigation = useNavigate()
    const MySwal = withReactContent(Swal)

    const [user, setUser] = useState({foto: ''})

    useEffect(() => {
        const loggedUser = JSON.parse(localStorage.getItem('usuarioLogado'))
        setUser(loggedUser)
    }, [])
    
   

    const [containerDisplay, setContainerDisplay] = useState(
        windowWith <= 1100 ? 'none' : 'flex'
    )

    function handleMenuClick() {
        setContainerDisplay(containerDisplay === 'none' ? 'flex' : 'none')
    }

    function handleNavigate(e, page) {
        e.preventDefault()

        mavigation(page)
    }

    function handleLogout(e) {
        e.preventDefault()

        localStorage.clear()
        sessionStorage.clear()

        mavigation('/')
    }


    function handleNotDoneYet(event) {

        function warning() {
            MySwal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Essa parte ainda não está pronta!',
                footer: 'Desculpa 😪',
                timer: 3000
            })
        }
        
        if (!event.key) {
            warning()
        }else if (event.key === 'Enter') {
            warning()
        }

    }



    function renderGenresElement() {
        return (
            <GenresContainer>
                <Link id="GenresLink" onClick={handleNotDoneYet} >Gêneros <FiChevronDown style={arrowDown} /></Link>

                <HiddenItemsContainer id="genres-hidden-items">
                    <HiddenItems onClick={handleNotDoneYet} >Ação</HiddenItems>
                    <HiddenItems onClick={handleNotDoneYet} >Aventura</HiddenItems>
                    <HiddenItems onClick={handleNotDoneYet} >Comédia</HiddenItems>
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
                                    <Link id="home" onClick={e => handleNavigate(e, '/movie-registration')} >Cadastrar Filme</Link>
                                    <Link id="home" onClick={e => handleNavigate(e, '/home')} >Inicio</Link>
                                </>
                            )
                            :
                            (
                                <>
                                    <Link id="home" onClick={e => handleNavigate(e, '/home')} >Inicio</Link>
                                    <Link id="home" onClick={e => handleNavigate(e, '/movie-registration')} >Cadastrar Filme</Link>
                                    {renderGenresElement()}
                                </>

                            )
                    }



                    <NavInputContainer>
                        <NavInput onKeyPress={e => handleNotDoneYet(e)} placeholder="Procure um filme..." />
                        <FiSearch onClick={handleNotDoneYet} style={searchIcon} />
                    </NavInputContainer>

                    <ProfileContainer>

                        <ProfileImageContainer>
                            <ProfileImage src={user.foto} alt="Foto de perfil" />

                            {windowWith > 1100
                                ? <FiChevronDown style={arrowDown} />
                                : null}
                        </ProfileImageContainer>

                        <HiddenItemsContainer id="profile-hidden-items">
                            <HiddenItems className='profileHiddenLink' to="/">Perfil</HiddenItems>
                            <HiddenItems className='profileHiddenLink' onClick={e => handleNavigate(e, '/cart')}>Carrinho</HiddenItems>
                            <HiddenItems className='profileHiddenLink' id="sair" onClick={e => handleLogout(e)}>Sair</HiddenItems>
                        </HiddenItemsContainer>

                    </ProfileContainer>


                </LinksContainer>
            </Container>
        </>
    )
}

export default Navbar;