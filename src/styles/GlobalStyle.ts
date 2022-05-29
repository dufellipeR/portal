import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --purple: #885F9C;
    --blue: #126877;
    --dark-blue: #134F9D;
    --green: #60752D;
    --red: #D91C1D;
    --orange: #EFA21A;
    --light-grey: #C4C4C4;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #E1E1E6;
    background-color: #FFF;
    max-height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`
