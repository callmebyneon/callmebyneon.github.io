import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import Template from 'components/Common/Template'
import { Link, graphql } from 'gatsby'
import GlobalStyle from 'components/Common/GlobalStyle'
import twemoji from 'twemoji'

type PortfolioPageProps = {
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

const PortfolioPage: FunctionComponent<PortfolioPageProps> = ({
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    file: { publicURL },
  },
}) => {
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
          dangerouslySetInnerHTML={{
            __html: twemoji.parse('🚧', {
              folder: 'svg',
              ext: '.svg',
            }),
          }}
        />
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
    file(name: { eq: "profile-image" }) {
      publicURL
    }
  }
`
