import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type ProfileImageProps = {
  profileImage: IGatsbyImageData
}

const ProfileImageWrapper = styled(GatsbyImage)`
  display: none;
  width: 120px;
  height: 120px;
  border-radius: 50%;

  @media (max-width: 768px) {
    display: none;
  }
`

const ProfileImage: FunctionComponent<ProfileImageProps> = function ({
  profileImage,
}) {
  return (
    <ProfileImageWrapper
      image={profileImage}
      alt="Profile Image: @callmebyneon"
    />
  )
}

export default ProfileImage
