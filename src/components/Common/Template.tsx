import React, { FunctionComponent, ReactNode } from 'react'
import { ThemeModeProvider } from 'hooks/DarkModeContext'
import HTMLBase from './HTMLBase'
import Navigator from './Navigator'
import Footer from './Footer'

type TemplateProps = {
  title: string
  description: string
  url: string
  image: string
  children: ReactNode
}

const Template: FunctionComponent<TemplateProps> = function ({
  title,
  description,
  url,
  image,
  children,
}) {
  return (
    <ThemeModeProvider>
      <HTMLBase data={{ title, description, url, image }}>
        <Navigator />
        {children}
        <Footer />
      </HTMLBase>
    </ThemeModeProvider>
  )
}

export default Template
