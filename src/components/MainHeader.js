import React from "react"
import styled from "styled-components"

import MainLogo from "./MainLogo"
import MainNav from "./MainNav"
import Hamburger from "./Hamburger"

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 7.5rem;
  display: grid;
  grid-template-columns: 60% 33% 7%;
  grid-template-areas: "logo nav hamburger";
  z-index: 999;
`

const HamburgerWrapper = styled.div`
  grid-area: hamburger;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const MainHeader = () => {
  return (
    <Header>
      <MainLogo style={{ cursor: "pointer" }} />
      <MainNav />
      <HamburgerWrapper>
        <Hamburger />
      </HamburgerWrapper>
    </Header>
  )
}

export default MainHeader
