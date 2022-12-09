import React from 'react'
import styled from '@emotion/styled'
import ScrollTopButton from './ScrollTopButton'

const BottomNavArea = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 1.4rem;
  // height: calc(6.5rem + 0.5em);
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: var(--z-fixed);
`

const BottomNav = () => {
  return (
    <BottomNavArea>
      {/* <ThemeToggleButton /> */}
      <ScrollTopButton />
    </BottomNavArea>
  )
}

export default BottomNav
