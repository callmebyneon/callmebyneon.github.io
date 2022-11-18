import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

interface PostContentProps {
  html: string
}

const TocWrapper = styled.div``

const TocRenderer = styled.div`
  // Renderer Style

  display: flex;
  flex-direction: column;
  width: 360px;
  max-height: calc(100vh - 80px);
  margin-right: 92px;
  margin-bottom: 30px;
  padding: 0;
  position: sticky;
  left: calc(50vw - (768px / 2) - 260px);
  top: 40px;
  word-break: keep-all;
  overflow-y: scroll;

  li {
    list-style: none;
    display: block;
    width: 100%;
    color: #aaa;
    line-height: 2;
    font-size: 14px;
    font-weight: 400;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    &:hover {
      font-weight: 700;
      color: rgb(64, 107, 159);
      border-width: 2px;
    }

    // h2 heading
    & > ul > li {
      margin-left: 0.5em;
      padding-left: 1em;
      border-left: 1px solid;

      // h3 heading
      & > ul > li {
        margin-left: 0.5em;
        padding-left: 1em;
        border-left: 1px solid;
      }
    }
  }

  @media (max-width: 1300px) {
    display: none;
  }
`

const PostContent: FunctionComponent<PostContentProps> = function ({ html }) {
  return (
    <TocWrapper>
      <TocRenderer dangerouslySetInnerHTML={{ __html: html }} />
    </TocWrapper>
  )
}

export default PostContent
