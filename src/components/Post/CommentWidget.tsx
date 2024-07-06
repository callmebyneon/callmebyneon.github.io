import React, {
  createRef,
  FunctionComponent,
  useContext,
  useEffect,
} from 'react'
import styled from '@emotion/styled'
import { DarkModeContext } from 'hooks/DarkModeContext'

const src = 'https://utteranc.es/client.js'
const repo = 'callmebyneon/callmebyneon.github.io'

type UtterancesAttributesType = {
  src: string
  repo: string
  'issue-term': string
  label: string
  theme: string
  crossorigin: string
  async: string
}

const UtterancesWrapper = styled.div`
  margin-top: 80px;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

const CommentWidget: FunctionComponent = function () {
  const element = createRef<HTMLDivElement>()
  const { dark } = useContext(DarkModeContext)

  useEffect(() => {
    if (element.current === null) return
    console.log(element.current)
    const utterances: HTMLScriptElement = document.createElement('script')

    const attributes: UtterancesAttributesType = {
      src,
      repo,
      'issue-term': 'pathname',
      label: 'Comment',
      theme: dark ? 'github-dark' : 'github-light',
      crossorigin: 'anonymous',
      async: 'true',
    }

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })

    if (element.current.childElementCount === 1) {
      const child = element.current.firstChild
      element.current.removeChild(child!)
    }
    element.current.appendChild(utterances)
  }, [dark])

  return <UtterancesWrapper ref={element} />
}

export default CommentWidget
