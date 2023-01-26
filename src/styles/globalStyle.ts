import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html, body {
    max-width: 100vw;
    overflow-x: hidden;
    font-family: 'Inter', sans-serif;
    font-size: 100%;
    scroll-behavior: smooth;

    color: #333;
    background: #e6e6e6;
  }
`;

export default GlobalStyle;
