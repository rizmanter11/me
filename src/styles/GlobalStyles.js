import { createGlobalStyle } from "styled-components";

//Typography

import '@fontsource/poppins';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import ThemeList from "../data/ThemeList";

const GlobalStyles = createGlobalStyle`
    :root{
        /* colors */
        --darkGreen_1: #009c84;
        --darkGreen_2: #001a16;
        --darkGreen_3: #111111;
        --darkGreen_4: #00332b;
        --mediumSlateGreen: #00df9a;
        --lightGreen_1: #fbfbfb;
        --lightGreen_2: #80ffeb;
        --white: #FFFFFF;
        --black: #000000;

        /* other */
        --header-height: 80px;
    }html{
        font-size: 10px;
    }
    body{
        background-color: ${({theme: {theme} }) => theme === ThemeList.light ? 'var(--lightGreen_1)': 'var(--darkGreen_3)'};
        font-family: 'Poppins', sans-serif;
    }
    *, *::after, *::before{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    a{
        text-decoration: none;
        cursor: pointer;
    }
    ul, li{
        list-style: none;
    }
    .container{
        max-width: 1200px;
        width: 90%;
        margin: 0 auto;
    }
    img, svg{
        width: 100%;
        height: 100%;
    }
`;

export default GlobalStyles;
