import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  html,
  body,
  #root {
    height: 100%;
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background:#141414;
    font-family: 'Montserrat', sans-serif;
    color:#292D41;
    font-weight: normal;
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
