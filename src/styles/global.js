import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body {
        overflow-x: hidden;
        /* -webkit-font-smoothing: antialiased; */
    }

    .titulo {
        color: #fff;
        font-size: 1.2rem;
        text-transform: uppercase;
    }

    .content-box {
        width: 50vw;
        min-height: 80vh;
        background-color: #000;
    }
`;
