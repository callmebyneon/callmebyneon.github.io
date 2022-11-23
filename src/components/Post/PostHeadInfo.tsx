import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

export type PostHeadInfoProps = {
  title: string
  date: string
  category: string
  tags: string[]
  emoji: string
}

const PostHeadInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 20px 0;
  color: #000;

  @media (max-width: 1200px) {
    width: 768px;
    padding: 40px 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Date = styled.div`
  margin-bottom: 1rem;
  font-size: 14px;
`

const Title = styled.div`
  // display: -webkit-box;
  // overflow: hidden;
  overflow-wrap: break-word;
  // text-overflow: ellipsis;
  // white-space: normal;
  // -webkit-line-clamp: 2;
  // -webkit-box-orient: vertical;
  margin-bottom: 1rem;
  font-size: 45px;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`

const PostData = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  margin-top: 10px;
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.4;

  & .tags {
    font-size: 0.875rem;
    margin-left: 1em;
    text-transform: lowercase;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    font-size: 16px;
    font-weight: 400;
  }
`

const PostHeadInfo: FunctionComponent<PostHeadInfoProps> = function ({
  title,
  date,
  category,
  tags,
  emoji,
}) {
  return (
    <PostHeadInfoWrapper>
      <Date>{date}</Date>
      <Title>{title}</Title>
      <PostData>
        <b className="category">{category}</b>
        <p className="tags">{tags.join(' / ')}</p>
      </PostData>
    </PostHeadInfoWrapper>
  )
}

export default PostHeadInfo
