import { createGlobalStyle } from 'styled-components';
import * as color from '../styles/ColorPalette';

const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }


    div#root {
        height: 100vh;
        display: block;
    }
    body {
        
        max-width: 1920px;
        min-width: 670px;
        min-height: 100vh;
        width: 100vw;
        overflow-x: hidden;
        margin: 0 auto;
        font-family: 'Roboto', sans-serif;
        background: ${color.primary};
}
`;

export default GlobalStyles;