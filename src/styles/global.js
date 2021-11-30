import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
    }

    body {
        color: #fff;
        background: rgb(12,6,29);
        background: linear-gradient(135deg,rgba(12,6,29,1) 14%, rgba(35,8,113,1)52%,rgba(68,7,83,1) 100%);
        background-repeat: no-repeat;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-size: 16px;
    }

    #root {
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    button {
        cursor: pointer;
    }
`;
