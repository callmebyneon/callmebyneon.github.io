import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { PostFrontmatterType } from 'types/PostItem.types'
import { Link } from 'gatsby'
import twemoji from 'twemoji'

type PostItemProps = PostFrontmatterType & {
  link: string
}

const PostItemWrapper = styled(Link)`
  display: flex;
  flex-direction: row;
  transition: 300ms all;
  position: relative;
  height: 120px;
  margin: 8px 0;
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.02);

  &:first-of-type {
    margin-top: 0;
  }

  & .wrapper {
    transition: 300ms all;
  }

  @media (max-width: 768px) {
    height: fit-content;
  }

  @media (hover: hover) {
    &:hover {
      filter: brightness(95%);
      background: rgba(0, 0, 0, 0.05);

      & .date__wrapper {
        opacity: 0;
      }

      & .thumbnail-image__wrapper {
        margin-top: -100%;
      }
    }
  }
`

const ThumbnailWrapper = styled.div`
  display: block;
  width: 120px;
  height: 120px;
  background: #e8e8e8;
  overflow: hidden;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  transition: 200ms all ease-out;

  @media (max-width: 768px) {
    display: none;
  }
`

const ThumbnailImageWrapper = styled.div`
  width: 120px;
  height: 120px;
  margin-top: 0;
  transition: 200ms all ease-out;
`

const ThumbnailImage = styled.div`
  padding: 2rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const PostItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
`

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 4px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 20px;
  font-weight: 700;

  @media (min-width: 768px) {
    white-space: nowrap;
  }
`

const Summary = styled.div`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-size: 16px;
  opacity: 0.8;
`

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 120px;
  height: 120px;
`

const Date = styled.div`
  display: inline;
  text-align: center;
  font-weight: 500;

  & span {
    display: inline-block;
  }

  & .mm-dd {
    margin-top: 4px;
    font-size: 26px;
    font-weight: 700;
  }
`

const Category = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: baseline;
  margin-bottom: 0.7em;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

const CategoryItem = styled.div`
  margin: 2.5px 5px;
  margin-left: auto;
  padding: 2px 4px;
  border-radius: 3px;
  background-color: #000;
  font-size: 14px;
  font-weight: 500;
  color: white;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 10px;
  }
`

const TagItem = styled.div`
  margin: 2.5px 5px;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 500;
  color: rgb(64, 107, 159);

  &:first-of-type {
    margin-left: 0;
  }
`

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
  category,
  tags,
  summary,
  emoji,
  link,
}) {
  const arrayFromDate: string[] = date.split('.')

  return (
    <PostItemWrapper to={link}>
      <ThumbnailWrapper>
        <DateWrapper className="date__wrapper wrapper">
          <Date>
            <span className="yyyy">{arrayFromDate[0]}</span>
            <br />
            <span className="mm-dd">
              {arrayFromDate[1]}.{arrayFromDate[2]}
            </span>
          </Date>
        </DateWrapper>
        <ThumbnailImageWrapper className="thumbnail-image__wrapper wrapper">
          <ThumbnailImage
            dangerouslySetInnerHTML={{
              __html: twemoji.parse(emoji || '🎃', {
                folder: 'svg',
                ext: '.svg',
              }),
            }}
          />
          {/* <ThumbnailImage
            image={gatsbyImageData}
            alt={`Post Item Image: ${title}`}
            loading="lazy"
          /> */}
        </ThumbnailImageWrapper>
      </ThumbnailWrapper>

      <PostItemContent>
        <Category>
          <TagItem>{tags.join(' / ')}</TagItem>
          <CategoryItem>{category}</CategoryItem>
        </Category>
        <Title>{title}</Title>
        <Summary>{summary}</Summary>
      </PostItemContent>
    </PostItemWrapper>
  )
}

export default PostItem
