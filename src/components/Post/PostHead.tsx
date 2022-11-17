import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import PostHeadInfo, { PostHeadInfoProps } from './PostHeadInfo'

type GatsbyImgProps = {
  image: IGatsbyImageData
  alt: string
  className?: string
}

type PostHeadProps = PostHeadInfoProps & {
  emoji: string
}

const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;

  @media (max-width: 768px) {
    height: 300px;
  }
`

const PostHead: FunctionComponent<PostHeadProps> = function ({
  title,
  date,
  category,
  tags,
  emoji,
}) {
  return (
    <PostHeadWrapper>
      <PostHeadInfo
        title={title}
        date={date}
        category={category}
        tags={tags}
        emoji={emoji}
      />
    </PostHeadWrapper>
  )
}

export default PostHead
