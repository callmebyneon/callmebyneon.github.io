// import { IGatsbyImageData } from 'gatsby-plugin-image'

export type PostFrontmatterType = {
  title: string
  date: string
  category: string
  tags: string[]
  summary: string
  emoji: string
}

export type PostListItemType = {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: PostFrontmatterType
  }
}

export type PostPageItemType = {
  node: {
    html: string
    tableOfContents: string
    frontmatter: PostFrontmatterType
  }
}
