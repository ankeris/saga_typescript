import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        color: white;
        box-sizing: border-box;
    }
    body {
        background-color: black;
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: 'Russo One', sans-serif;
    }

    .app-box {
        max-width: 900px;
        margin: 0 auto;
    }
`