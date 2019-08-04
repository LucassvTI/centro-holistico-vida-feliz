import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root{
    --verde-escuro: #719437;
    --verde-claro: #b1ca84;
    --branco-fundo: #f5f5f5;
    --dark-green: #2F4F4F;
    --dark-olive: #556B2F;
  }
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html,body, #root{
    height: 100%;
    background-color: var(--branco-fundo);
    font-family: 'Bree Serif', serif;
  }
  body{
    -webkit-font-smoothing: antialiased !important;
  }
  h1{
      color: var(--verde-escuro);
      font-size: 2rem;
    }
  h2{
    color: var(--verde-claro);
    font-size: 1.6rem;
  }
  h3{
    color: var(--verde-claro);
    font-size: 1.3rem;
  }
  h4{
    color: var(--verde-claro);
    font-size: 1.1rem;
  }
  strong,b{
    color: var(--dark-olive);
  }
  ul{
    list-style: none;
  }
  p{
    color: var(--dark-green);
    font-family: 'Open Sans', serif;
    font-size: 1.1rem;
  }
`;

export default GlobalStyle;