import React from "react"
import styled from "styled-components"

import LogoSVG from "../assets/images/vector/ripple-logo-no-text-white.png"

const LogoWrapper = styled.div`
  display: inline-block;
  padding: 1.625rem 2.625rem;
`

const LogoImage = styled.img`
  display: inline-block;
  width: 8rem;
  margin-right: 0.25rem;
  filter: brightness(0);
`

const LogoText = styled.h1`
  display: inline-block;
  font-family: var(--logo-font);
  font-size: 3.75rem;
`

const MainLogo = props => {
  return (
    <LogoWrapper className={props.className}>
      <LogoImage src={LogoSVG} alt={""} />
      <LogoText>RIPPLE</LogoText>
    </LogoWrapper>
  )
}

export default MainLogo
