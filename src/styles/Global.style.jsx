import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        max-width: 1920px;
        height: 100vh;
        width: 100vw;
        margin: 0 auto;
        font-family: 'Roboto', sans-serif;
}
`;

export default GlobalStyles;