import React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const FixedButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: inherit;
  width: 3rem;
  height: 3rem;
  border: 2px solid;
  border-radius: 50%;
  box-sizing: border-box;
  background: rgba(246, 246, 246, 0.8);
  transition: 200ms all;

  @media (hover: hover) {
    &:hover {
      color: rgb(64, 107, 159);
      // transform: translateY(-10%);
    }
  }
`

const ScrollTopCTA = () => {
  const onScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <FixedButton title="go to top of this page" onClick={onScrollToTop}>
      <FontAwesomeIcon icon={faArrowUp} />
    </FixedButton>
  )
}

export default ScrollTopCTA
