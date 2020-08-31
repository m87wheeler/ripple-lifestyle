import React from "react"
import styled from "styled-components"

const Nav = styled.nav`
  grid-area: nav;
  width: 100%;
  max-width: 40rem;
  height: inherit;
  padding: 0 1rem;

  ul {
    width: 100%;
    height: inherit;
    display: flex;
    list-style: none;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    li {
      font-family: var(--display-font);
      color: var(--text-white);
      font-size: 1rem;
      cursor: pointer;

      &:hover {
        margin-top: 3px;
        border-bottom: 2px solid var(--primary);
      }
    }
  }
`

const MainNav = () => {
  return (
    <Nav>
      <ul>
        <li>ABOUT</li>
        <li>SESSIONS</li>
        <li>FAQ</li>
        <li>MEMBERS</li>
        <li>CONTACT</li>
      </ul>
    </Nav>
  )
}

export default MainNav
