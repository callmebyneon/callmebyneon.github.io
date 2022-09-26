import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

const defaultStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700;900&family=Noto+Sans+Mono&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol';
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  code[class*='language-'],
  pre[class*='language-'],
  code[class*='language-'] *,
  pre[class*='language-'] * {
    font-family: 'Noto Sans Mono', monospace;
  }
`

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle
