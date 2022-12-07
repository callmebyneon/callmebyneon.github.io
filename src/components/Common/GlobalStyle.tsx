import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

const defaultStyle = css`
  :root {
    // colors
    --background-color: #f6f6f6;

    // z-index
    --z-sticky: 10;
    --z-fixed: 20;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
    font-size: 16px;
    background-color: var(--background-color);

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  code,
  pre,
  code *,
  pre * {
    font-family: 'Fira Mono', source-code-pro, Menlo, Monaco, Consolas,
      'Courier New', monospace;
    font-size: 14px;
  }

  small {
    font-size: 0.875rem; // 14px ~ 12.25px
  }

  img {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .grvsc-code {
    width: 100%;
  }
`

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle
