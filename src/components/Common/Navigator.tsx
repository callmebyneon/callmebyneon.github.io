import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const NavigatorWrapper = styled.nav`
  display: block;
  width: 100%;
`

const NavLinks = styled.div`
  display: flex;
  width: 1200px;
  margin: 0 auto;
  height: 100px;
  align-items: center;
  justify-content: flex-end;

  & > a {
    display: block;
    margin-left: 2.5em;
    font-size: 1.25rem;
    font-weight: 700;
    border-bottom: 1px solid;

    & svg {
      font-size: 0.8em;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 80px;
    padding: 2rem;
    justify-content: flex-start;

    & > a {
      margin-left: 0;
      margin-right: 2em;
    }
  }
`

const Navigator: FunctionComponent = function () {
  return (
    <NavigatorWrapper>
      <NavLinks>
        <Link to="/portfolio">Portfolio</Link>
        <a
          rel="noopener"
          href="https://github.com/callmebyneon"
          target="_blank"
        >
          Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </NavLinks>
    </NavigatorWrapper>
  )
}

export default Navigator
