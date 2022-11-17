import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import { PostPageItemType } from 'types/PostItem.types'
import Template from 'components/Common/Template'
import PostHead from '../components/Post/PostHead'
import PostTOC from '../components/Post/PostTOC'
import PostContent from '../components/Post/PostContent'
import CommentWidget from 'components/Post/CommentWidget'
import styled from '@emotion/styled'
import ScrollTopCTA from 'components/Common/ScrollTopCTA'

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
  padding: 100px 0;
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
      <PostHead
        title={title}
        date={date}
        category={category}
        tags={tags}
        emoji={emoji}
      />
      <ContentWrapper>
        <PostTOC html={tableOfContents} />
        <PostContent html={html} />
      </ContentWrapper>
      <CommentWidget />
      <ScrollTopCTA />
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
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
              publicURL
            }
          }
        }
      }
    }
  }
`
