import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
    --primary: #044FA1;
    --secondary: ##FBDC51 ;
    --light-font: #ffffff;
    --dark-font: #aaaaaa;

    --transparent-dark: rgb(0, 0, 0,0.7);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-size: 1rem;
    vertical-align: baseline;
    }

    body {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      line-height: 1;
    }

    .App{
      display: flex;
      justify-content: center;
    }

    ol, ul {
	    list-style: none;
    }
    
    a {
      text-decoration: none;
    }
    
    button {
      cursor: pointer;
    }

`;

export default GlobalStyle;
