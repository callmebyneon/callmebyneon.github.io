import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import ProfileImage from 'components/Main/ProfileImage'
import { IGatsbyImageData } from 'gatsby-plugin-image'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const HeaderBackground = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 1200px;
  height: 160px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100px;
  }
`

const Title = styled.div`
  margin-bottom: 0.125em;
  font-size: 2.5rem;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const SubTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`

const Introduction: FunctionComponent<IntroductionProps> = function ({
  // TODO: alter logo image
  profileImage,
}) {
  return (
    <HeaderBackground>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />
        <div>
          <Title>Dev Log</Title>
          <SubTitle>
            <a href="https://github.com/callmebyneon">@callmebyneon</a>
          </SubTitle>
        </div>
      </Wrapper>
    </HeaderBackground>
  )
}

export default Introduction
