import React from "react"
import styled, { keyframes } from "styled-components"

const slideInLeftAndUp = keyframes`
/* duration 4.5s */
  0% {
    left: -100vw;
  }
  11.111% {
    left: 0;
  }
  88.888% {
    left: 0;
    top: 0;
  }
  98% {
    left: 0;
    top: -100vh;
  }
  100% {
    left: -100vw;
    top: -100vh;
    display: none;
  }
`

const slideInLeftAndDown = keyframes`
/* duration 4s */
  0% {
    left: -100vw;
  }
  11.111% {
    left: 0;
  }
  88.888% {
    left: 0;
    bottom: 0;
  }
  99% {
    left: 0;
    bottom: -100vh;
  }
  100% {
    left: -100vw;
    bottom: -100vh;
    display: none;
  }
`

const slideInRightAndAside = keyframes`
/* duration 5s */
0% {
  right: -100vw;
}
10% {
  right: 0;
}
90% {
  right: 0;
}
100% {
  right: 17%;
}
`

const Appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const TextWrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: 1fr 1fr;

  p {
    position: relative;
    font-family: var(--display-font);
    font-weight: 700;
  }

  p:nth-of-type(1),
  p:nth-of-type(4) {
    font-size: 4rem;
    line-height: 3.125rem;
  }

  p:nth-of-type(1) {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    text-align: right;
    color: var(--text-black);

    left: -100vw;
    top: 0;
    animation: ${slideInLeftAndUp} 2.666s forwards 1;
    animation-delay: 0.5s;
  }

  p:nth-of-type(4) {
    grid-row: 3 / 4;
    grid-column: 2 / 3;
    text-align: left;
    color: var(--text-white);

    left: -100vw;
    animation: ${slideInLeftAndDown} 2.666s forwards 1;
    animation-delay: 1.166s;
  }

  p:nth-of-type(2),
  p:nth-of-type(3) {
    font-size: 12rem;
    line-height: 12rem;
  }

  p:nth-of-type(2) {
    grid-row: 2 / 3;
    grid-column: 1 / 3;
    text-align: center;
    color: var(--primary);

    right: -100vw;
    animation: ${slideInRightAndAside} 3.333s forwards 1;
    animation-delay: 0.833s;
  }

  p:nth-of-type(3) {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    color: var(--text-white);
    opacity: 0;
    animation: ${Appear} 0.333s forwards 1;
    animation-delay: 4.166s;
  }
`

const LandingText = props => {
  return (
    <TextWrapper className={props.className}>
      <p>SMALL CHANGES</p>
      <p>MAKE</p>
      <p>YOURS</p>
      <p>BIG DIFFERENCES</p>
    </TextWrapper>
  )
}

export default LandingText
