import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${props => props.theme.backgroundColor}
    }
    *{
        font-family: Arial, Helvetica, sans-serif;
    }
`



export default GlobalStyle;