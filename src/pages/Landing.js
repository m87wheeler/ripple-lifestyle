import React from "react"
import styled from "styled-components"

import LandingPhoto from "../assets/images/photography/alexander-redl-d3bYmnZ0ank-unsplash.jpg"
import LandingText from "../components/LandingText"

const LandingWrapper = styled.section`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 200vh;
`

const BackgroundImageWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    min-height: 100%;
    filter: saturate(0) brightness(0.5);
    z-index: -1;
  }
`

const AnimatedText = styled(LandingText)`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%) translateY(-20%);
`

const Landing = props => {
  return (
    <LandingWrapper>
      <BackgroundImageWrapper>
        <img src={LandingPhoto} alt="" />
      </BackgroundImageWrapper>
      <AnimatedText />
    </LandingWrapper>
  )
}

export default Landing
