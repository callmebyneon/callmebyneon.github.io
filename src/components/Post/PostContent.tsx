import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

interface PostContentProps {
  html: string
}

const ContentWrapper = styled.div`
  width: 768px;
  margin: 0;
`

const MarkdownRenderer = styled.div`
  // Renderer Style
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
  word-break: break-all;

  // Markdown Style
  line-height: 1.8;
  font-size: 1rem;
  font-weight: 400;

  // Apply Padding Attribute to All Elements
  p {
    padding: 3px 0;
  }

  // Adjust Heading Element Style
  h1,
  h2,
  h3 {
    font-weight: 700;
    margin-bottom: 1em;
  }

  * + h1,
  * + h2,
  * + h3 {
    padding-top: 2em;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    padding-top: 0;
  }

  h1 {
    font-size: 1.875rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 2px solid #000000;
    font-weight: 700;
  }

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 20px;
    padding: 20px 0;
  }

  // Adjust Horizontal Rule style
  hr {
    border: 1px solid #000000;
    margin: 100px 0;
  }

  // Adjust Link Element Style
  a {
    color: #4263eb;
    text-decoration: underline;
  }

  // Adjust Code Style
  pre[class*='language-'] {
    margin: 30px 0;
    padding: 15px 20px;
    font-size: 0.875rem;
    border-radius: 12px;
    overflow: auto;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  code[class*='language-'] {
    border-radius: 4px;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
    background-color: #eee;
    font-family: 'Noto Sans Mono', monospace;
  }

  // Markdown Responsive Design
  @media (max-width: 768px) {
    width: 100%;
    padding: 80px 20px;
    line-height: 1.6;

    h1 {
      font-size: 23px;
    }

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 17px;
    }

    img {
      width: 100%;
    }

    hr {
      margin: 3.5714rem 0;
    }
  }
`

const PostContent: FunctionComponent<PostContentProps> = function ({ html }) {
  return (
    <ContentWrapper>
      <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
    </ContentWrapper>
  )
}

export default PostContent
