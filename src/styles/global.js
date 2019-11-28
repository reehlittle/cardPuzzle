import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: unset;
    }

    html, body, #root {
        min-height: 100%;
    }

    body {
        background:#000 url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
        z-index:0;
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, button {
        color: #333;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
    }

    button {
        cursor: pointer;
    }
`;