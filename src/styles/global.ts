import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    :root {
        font-size: 62.5%;
        font-family: 'Nunito', sans-serif;
        line-height: 160%;
    }
    :focus {
        outline: 2px solid ${(props) => props.theme.blue};
    }
    ::-webkit-scrollbar {
        width: 0.3rem;
    }
    ::-webkit-scrollbar-track {
        background-color: ${(props) => props.theme['base-span']};
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme['base-label']};
    }
    ::-webkit-scrollbar-thumb:hover {
        background-color: ${(props) => props.theme.blue};
    }
`
