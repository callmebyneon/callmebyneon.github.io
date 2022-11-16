import React, { FunctionComponent, ReactNode } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

type CategoryItemProps = {
  active: boolean
}

type GatsbyLinkProps = {
  children: ReactNode
  className?: string
  to: string
} & CategoryItemProps

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    [key: string]: number
  }
}

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 768px;
  margin: 20px auto 0;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
`
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))`
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 4px 8px;
  font-size: 16px;
  letter-spacing: 0.2px;
  font-weight: ${({ active }) => (active ? '700' : '400')};
  background: ${({ active }) => (active ? '#000' : '#aaa')};
  border-radius: 4px;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #000;
  }

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    margin-right: 4px;
    margin-bottom: 4px;
    font-size: 1rem;
  }
`

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          to={`/?category=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          {name}({count})
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  )
}

export default CategoryList
