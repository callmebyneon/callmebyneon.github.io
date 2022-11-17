import React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const TopButton = styled.button`
  all: unset;
  display: block;
  position: fixed;
  bottom: 50%;
  right: 1em;
  font-size: 1.25rem;
  transition: 200ms all;

  &:hover {
    color: rgb(64, 107, 159);
    // transform: translateY(-10%);
  }
`

const ScrollTopCTA = () => {
  const onScrollToTop = () => {
    window.scrollTo({
      top: 0,
    })
  }

  return (
    <TopButton title="go to top of this page" onClick={onScrollToTop}>
      <FontAwesomeIcon icon={faArrowUp} />
    </TopButton>
  )
}

export default ScrollTopCTA
