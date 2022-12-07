import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import { PostPageItemType } from 'types/PostItem.types'
import Template from 'components/Common/Template'
import PostHead from '../components/Post/PostHead'
import PostTOC from '../components/Post/PostTOC'
import PostContent from '../components/Post/PostContent'
import CommentWidget from 'components/Post/CommentWidget'
import styled from '@emotion/styled'
import BottomNav from 'components/Common/BottomNav'

type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[]
    }
  }
  location: {
    href: string
  }
}

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 80px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 768px;
  margin: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
  location: { href },
}) {
  const {
    node: {
      html,
      tableOfContents,
      frontmatter: { title, summary, date, category, tags, emoji },
    },
  } = edges[0]

  return (
    <Template title={title} description={summary} url={href} image={emoji}>
      <ContentWrapper>
        <PostTOC html={tableOfContents} />
        <Content>
          <PostHead
            title={title}
            date={date}
            category={category}
            tags={tags}
            emoji={emoji}
          />
          <PostContent html={html} />
        </Content>
      </ContentWrapper>
      <CommentWidget />
      <BottomNav />
    </Template>
  )
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          tableOfContents(maxDepth: 3)
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            category
            tags
            emoji
          }
        }
      }
    }
  }
`
