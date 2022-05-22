import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    clear: none;
    text-decoration: none;
    list-style: none;
    }

  body {
    background-color: rgb(59, 59, 59);
    font-family: 'Noto Sans', sans-serif;
    }
    
    ::-webkit-scrollbar {
    width: 8px; 
    }

    ::-webkit-scrollbar-button {
    width: 5px;
    }

    ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #1a8a52;
    border: 2px solid rgba(0, 0, 0, 0.2);
    }
`;