import styled from "styled-components";

let linksMarginRight = '6%'
let profilePicSize = '75px'

let linksHeightSidebar = '10vh'

const windowWith = window.innerWidth;

if (windowWith < 1300 && windowWith > 1200) {
    linksMarginRight = '8%'

} else if (windowWith < 1200) {
    linksMarginRight = '10%'

}else if (windowWith < 1100) {
    linksMarginRight = '0%'
}


const NavbarColor = '#222222'
const primaryColor = '#7E14A8'

export const Container = styled.div`
    width: 100vw;
    height: 10vh;

    background: ${NavbarColor};

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1100px) {
        width: 30vw;
        height: 100vh;

        flex-direction: column;
    }
`

// ---------------- LOGO ----------------

export const LogoContainer = styled.div`
    width: 25%;
    height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1100px) {
        display: none;
    }
`

export const Logo = styled.img`
    width: 50%;
`

// ---------------- LINKS ----------------

export const LinksContainer = styled.div`
    width: 75%;
    height: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 1100px) {
        flex-direction: column-reverse;
        justify-content: flex-end;

        width: 100%;
        height: 100%;
    }
`

export const Link = styled.a`
    color: #fff !important;
    font-size: 1.2rem;
    font-weight: bold;
    margin-right: ${linksMarginRight};

    transition: 0.2s;
    cursor: pointer;

    display: flex;
    align-items: center;
    
    &:hover {
        color: ${primaryColor} !important;
    }

    @media (max-width: 1100px) {
        width: 100%;
        height: 10%;

        display: flex;
        justify-content: center;
        align-items: center;
    }

`

// ---------------- GENRES ----------------

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

    @media (max-width: 1100px) {
        width: 100%;
        height: 10%;
        
        min-height: ${linksHeightSidebar};

        display: flex;
        align-items: center;
        justify-content: center;

        margin-right: 0;

        #GenresLink {
            width: 100%;
            height: 100%;
        }

        &:hover {
            #genres-hidden-items {
                display: flex;
                width: 100%;
            }
    }
    }
`

// ---------------- IMPUT ----------------

export const NavInputContainer = styled.div`
    width: 13em;
    height: 2.8em;
    position: relative;
    margin-right: ${linksMarginRight};

    @media (max-width: 1100px) {
        width: 100%;
        height: ${linksHeightSidebar};

        display: flex;
        justify-content: center;
        align-items: center;

        margin: 0;
    }
`

export const NavInput = styled.input`
    width: 100%;
    height: 100%;

    border: none;
    border-radius: 30px;
    
    padding-left: 5%;
    font-size: .9rem;

    @media (max-width: 1100px) {
        width: 80%;
        height: 60%;
        
    }
`

export const searchIcon = {
    position: 'absolute',
    right: '5%',
    top: '25%',
    color: '#000',
    fontSize: 20,
    strokeWidth: 3.5
}

if (windowWith < 1100) {
    searchIcon.right = '15%'
    searchIcon.top = '38%'
}


// ---------------- PROFILE ----------------

export const ProfileContainer = styled.div`
    height: 100%;

    margin-right: ${linksMarginRight};
    padding-right: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: #fff;
    transition: 0.2s;

    position: relative;
    cursor: pointer;

    &:hover {
        color: ${primaryColor};

        #profile-hidden-items {
            display: flex;
        }
    }

    @media (max-width: 1100px)  {
        width: 100%;
        height: ${linksHeightSidebar};
        margin: 0;
    }

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

// ---------------- SUBITENS ----------------

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
