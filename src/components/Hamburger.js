import React from "react"
import styled from "styled-components"

const HamburgerWrapper = styled.div`
  width: 1.75rem;
  height: 1.5rem;
  margin-top: -0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  span {
    width: 100%;
    height: 4px;
    background: var(--text-white);
    transition: background 0.2s ease;
  }

  &:hover > span {
    background: var(--primary);
  }
`

const Hamburger = props => {
  return (
    <HamburgerWrapper className={props.className}>
      <span></span>
      <span></span>
      <span></span>
    </HamburgerWrapper>
  )
}

export default Hamburger
