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

    /*
    // Works on Firefox
    * {
        scrollbar-width: thin;
        scrollbar-color: ${({theme: {theme}}) => theme === ThemeList.light ? '#e1ede8' : '#1E1E1E'} var(--mediumSlateGreen);
    }

    // Works on Chrome, Edge, and Safari
    *::-webkit-scrollbar {
        width: 16px;
        background:inherit;
    }
    
    *::-webkit-scrollbar-track {
        background: ${({theme: {theme}}) => theme === ThemeList.light ? '#e1ede8' : '#1E1E1E'};
        box-shadow: inset 0 0 6px ${({theme: {theme}}) => theme === ThemeList.light ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.3)'};
        margin: 10px;
        border-radius: 100px;
    }

    *::-webkit-scrollbar-thumb {
        border: 5px solid transparent;
        border-radius: 100px;
        background-color: var(--mediumSlateGreen);
        background-clip: content-box;
    }
    */

    ::-webkit-scrollbar-track
    {
        border: 5px solid ${({theme: {theme} }) => theme === ThemeList.light ? 'var(--lightGreen_1)': 'var(--darkGreen_3)'};
        // border color does not support transparent on scrollbar
        // border-color: transparent;
        background-color: #b2bec3;
        margin: 10px;
    }

    ::-webkit-scrollbar
    {
        width: 13px;
        background-color: ${({theme: {theme} }) => theme === ThemeList.light ? 'var(--lightGreen_1)': 'var(--darkGreen_3)'};
    }

    ::-webkit-scrollbar-thumb
    {
        border: 5px solid transparent;
        border-radius: 100px;
        background-color: var(--mediumSlateGreen);
    }
`;

export default GlobalStyles;
