import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    color: ${props => props.theme.colors.dark[500]};
  }
  body {
    background: transparent;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 400 1rem Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }
  
  ::-webkit-scrollbar {
    width: 8px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.05);
  }
  
  ::-webkit-scrollbar-track {
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
`