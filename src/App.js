import React from "react"
import { createGlobalStyle } from "styled-components"

import Landing from "./pages/Landing"

import MainHeader from "./components/MainHeader"

const GlobalStyleReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
  }
`
const GlobalVariables = createGlobalStyle`
  html {
    --display-font: 'Arvo', serif;
    --logo-font: 'Fjalla One', sans-serif;

    --text-white: #fff;
    --text-black: #000;
    --primary: #B11C1C;
  }
`

const App = () => {
  return (
    <div className="App">
      <GlobalStyleReset />
      <GlobalVariables />
      <MainHeader />
      <Landing />
    </div>
  )
}

export default App
