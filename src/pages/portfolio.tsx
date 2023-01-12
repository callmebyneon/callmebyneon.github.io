import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import Template from 'components/Common/Template'
import { Link, graphql } from 'gatsby'
import GlobalStyle from 'components/Common/GlobalStyle'
import twemoji from 'twemoji'

interface FileInfoType {
  base: string
  name: string
  ext: string
  publicURL: string
}

interface PortfolioPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        siteUrl: string
      }
    }
    file: {
      publicURL: string
    }
    allFile: {
      nodes: FileInfoType[]
    }
  }
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
`

const HeroImage = styled.div`
  width: 200px;
  height: 200px;
`

const Description = styled.div`
  font-size: 1.5rem;
  text-align: center;
  line-height: 1.3;
`

const GoToMainButton = styled(Link)`
  margin-top: 30px;
  font-size: 1.25rem;
  text-decoration: underline;

  &:hover {
    text-decoration: underline;
  }
`

const generateImageObject = (nodes: FileInfoType[]) => {
  const imageObj = {}

  nodes.forEach(node => {
    Object.defineProperty(imageObj, node.name, {
      value: node,
      writable: false,
    })
  })

  return imageObj
}

const PortfolioPage: FunctionComponent<PortfolioPageProps> = ({
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    file: { publicURL },
    allFile: { nodes },
  },
}) => {
  const source = generateImageObject(nodes)
  console.log(source)

  return (
    <Template
      title={title}
      description={description}
      url={siteUrl}
      image={publicURL}
    >
      <PageWrapper>
        <GlobalStyle />
        <HeroImage
        // dangerouslySetInnerHTML={{
        //   __html: twemoji.parse('🚧', {
        //     folder: 'svg',
        //     ext: '.svg',
        //   }),
        // }}
        >
          <img src={publicURL} title="준비중" alt="준비중" />
        </HeroImage>
        <Description>
          준비 중인 페이지입니다. <br />
          다른 콘텐츠를 보러 가보시겠어요?
        </Description>
        <GoToMainButton to="/">메인으로</GoToMainButton>
      </PageWrapper>
    </Template>
  )
}

export default PortfolioPage

export const getPageInfo = graphql`
  query getPageInfo {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    file(name: { eq: "1f6a7" }) {
      publicURL
    }
    allFile(filter: { absolutePath: { regex: "/portfolio/" }, publicURL: {} }) {
      nodes {
        base
        name
        ext
        publicURL
      }
    }
  }
`
