import { ReactNode, FunctionComponent, useContext } from 'react'
import styled from '@emotion/styled'
import { Helmet } from 'react-helmet'
import GlobalStyle from './GlobalStyle'
import { DarkModeContext } from 'hooks/DarkModeContext'

type TemplateProps = {
  data?: {
    title: string
    description: string
    url: string
    image: string
  }
  children: ReactNode
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const HTMLBase: FunctionComponent<TemplateProps> = props => {
  const defaultData = { description: '', title: '', image: '', url: '' }
  const { data = defaultData, children } = props
  const { dark } = useContext(DarkModeContext)
  return (
    <Container data-theme={dark ? 'dark' : 'light'}>
      <Helmet>
        <meta name="description" content={data.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:image" content={data.image} />
        <meta property="og:url" content={data.url} />
        <meta property="og:site_name" content={data.title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={data.description} />
        <meta name="twitter:image" content={data.image} />
        <meta name="twitter:site" content="@callmebyneon" />
        <meta name="twitter:creator" content="@callmebyneon" />
        <meta name="theme-color" content="#f6f6f6" />

        <html lang="ko" />
        <title>{data.title || 'Dev Log of Neon'}</title>
        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
          type="image/x-icon"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Mono&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="true"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard-dynamic-subset.css"
        />
      </Helmet>

      <GlobalStyle />
      {children}
    </Container>
  )
}

export default HTMLBase
