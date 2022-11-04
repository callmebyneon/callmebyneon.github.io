import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import ProfileImage from 'components/Main/ProfileImage'
import { IGatsbyImageData } from 'gatsby-plugin-image'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Background = styled.div`
  width: 100%;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 768px;
  height: 160px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 200px;
    padding: 0 20px;
  }
`

const SubTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
`

const Title = styled.div`
  margin-top: 5px;
  font-size: 1.25rem;
  font-weight: 500;
`

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />
        <div>
          <SubTitle>Hello, world!</SubTitle>
          <Title>I'm Junior Frontend Developer 나연.</Title>
        </div>
      </Wrapper>
    </Background>
  )
}

export default Introduction
