import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
    font-size: 16px;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.75;
  }

  p{
    margin-bottom: 1rem;
  }
  
  *, *:before, *:after{
    box-sizing: inherit;
  }

  //override default text selection color
  ::selection { background: hotpink; /* WebKit/Blink Browsers */ }
  ::-moz-selection { background: #hotpink; /* Gecko Browsers */ }

`;
