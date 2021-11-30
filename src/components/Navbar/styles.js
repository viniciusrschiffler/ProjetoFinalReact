import styled from "styled-components";

const linksMarginRight = '6%'
const profilePicSize = '75px'

const NavbarColor = '#222222'
const primaryColor = '#7E14A8'

export const Container = styled.div`
    width: 100vw;
    height: 10vh;

    background: ${NavbarColor};

    display: flex;
    justify-content: center;
    align-items: center;
`

export const LogoContainer = styled.div`
    width: 25%;
    height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Logo = styled.img`
    width: 50%;
`

export const LinksContainer = styled.div`
    width: 75%;
    height: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const Link = styled.a`
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    margin-right: ${linksMarginRight};

    transition: 0.2s;
    cursor: pointer;

    display: flex;
    align-items: center;
    
    &:hover {
        color: ${primaryColor};
    }

`

export const GenresContainer = styled.div`
    position: relative;

    width: 6%;
    min-height: 80%;
    
    margin-right: ${linksMarginRight};

    display: flex;


    &:hover {
        #genres-hidden-items {
            display: flex;
            width: 160%;
        }
    }
`

export const NavInputContainer = styled.div`
    width: 15%;
    height: 45%;
    position: relative;
    margin-right: ${linksMarginRight};
`

export const NavInput = styled.input`
    width: 100%;
    height: 100%;

    border: none;
    border-radius: 30px;
    
    padding-left: 5%;
    font-size: .9rem;
`

export const searchIcon = {
    position: 'absolute',
    right: '5%',
    top: '25%',
    color: '#000',
    fontSize: 20,
    strokeWidth: 3.5
}


export const ProfileContainer = styled.div`
    min-height: 100%;

    margin-right: ${linksMarginRight};
    padding-right: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: #fff;
    transition: 0.2s;

    position: relative;

    &:hover {
        color: ${primaryColor};

        #profile-hidden-items {
            display: flex;
        }
    }

    cursor: pointer;
`

export const ProfileImageContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`


export const ProfileImage = styled.img`
    width: ${profilePicSize};
    height: ${profilePicSize};
    
    border-radius: 50%;
`

export const arrowDown = {
    strokeWidth: '3.5',
    fontSize: '25'
}

export const HiddenItemsContainer = styled.div`
    width: 100%;

    display: none;
    flex-direction: column;

    position: absolute;
    top: 100%;
`

export const HiddenItems = styled(Link)`
    background: ${NavbarColor};
    border-bottom: 2px solid;
    padding: 10%;

    &:hover:nth-child(3){
        &#sair {
            color: #ee2d2d;
        }
    }

`
