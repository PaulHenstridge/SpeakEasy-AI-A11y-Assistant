import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${props => props.theme.colors.bg};
    }
    *{
        font-family: 'Roboto', sans-serif;
    }

    button {
        font-size: ${props => props.theme.fontSize.medium};
        background-color: ${props => props.theme.colors.fg};
        color:  ${props => props.theme.colors.ac};
        font-weight:800;
        letter-spacing:  ${props => props.theme.letterSpacing.medium};
    }
`
export default GlobalStyle;