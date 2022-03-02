import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        color: inherit;
        text-decoration: none;
    }

    

    button{
        border: none;
        cursor: pointer;
        background: inherit;
    }

    input{
        color: inherit;
    }

`