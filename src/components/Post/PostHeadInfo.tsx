import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

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
  width: 1200px;
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

const PrevPageIcon = styled.div`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #000000;
  font-size: 22px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 18px;
  }
`

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  overflow-wrap: break-word;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 45px;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`

const PostData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 10px;
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.4;

  & .tags {
    font-size: 0.875rem;
    margin-bottom: 1em;
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
  const goBackPage = () => window.history.back()

  return (
    <PostHeadInfoWrapper>
      <PrevPageIcon onClick={goBackPage}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </PrevPageIcon>
      <Title>
        {emoji} {title}
      </Title>
      <PostData>
        <div>
          <b className="category">{category}</b>
          <p className="tags">{tags.join(' / ')}</p>
        </div>
        <div>{date}</div>
      </PostData>
    </PostHeadInfoWrapper>
  )
}

export default PostHeadInfo
