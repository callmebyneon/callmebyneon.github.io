import { graphql } from "gatsby";
import queryString, { ParsedQuery } from "query-string";
import React, { FunctionComponent, useMemo } from "react";
import Header from "components/Main/Header";
import CategoryList, { CategoryListProps } from "components/Main/CategoryList";
import Template from "components/Common/Template";
import PostList from "components/Main/PostList";
import { PostListItemType } from "types/PostItem.types";
import BottomNav from "components/Common/BottomNav";

type IndexPageProps = {
	location: {
		search: string;
	};
	data: {
		site: {
			siteMetadata: {
				title: string;
				description: string;
				siteUrl: string;
			};
		};
		allMarkdownRemark: {
			edges: PostListItemType[];
		};
		file: {
			publicURL: string;
		};
	};
};

const IndexPage: FunctionComponent<IndexPageProps> = function ({
	location: { search },
	data: {
		site: {
			siteMetadata: { title, description, siteUrl },
		},
		allMarkdownRemark: { edges },
		file: { publicURL },
	},
}) {
	const parsed: ParsedQuery<string> = queryString.parse(search);
	const selectedCategory: string =
		typeof parsed.category !== "string" || !parsed.category
			? "All"
			: parsed.category;

	const categoryList = useMemo(
		() =>
			edges.reduce(
				(
					list: CategoryListProps["categoryList"],
					{
						node: {
							frontmatter: { category },
						},
					}: PostListItemType,
				) => {
					if (list[category] === undefined) list[category] = 1;
					else list[category]++;
					// category.forEach(category => {
					//   if (list[category] === undefined) list[category] = 1
					//   else list[category]++
					// })

					list["All"]++;

					return list;
				},
				{ All: 0 },
			),
		[],
	);

	return (
		<Template
			title={title}
			description={description}
			url={siteUrl}
			image={publicURL}
		>
			<Header />
			<CategoryList
				selectedCategory={selectedCategory}
				categoryList={categoryList}
			/>
			<PostList selectedCategory={selectedCategory} posts={edges} />
			<BottomNav />
		</Template>
	);
};

export default IndexPage;

export const getPostList = graphql`
	query getPostList {
		site {
			siteMetadata {
				title
				description
				siteUrl
			}
		}
		allMarkdownRemark(
			filter: { fields: { dir: { eq: "post" } } }
			sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
		) {
			edges {
				node {
					id
					fields {
						slug
					}
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
		file(name: { eq: "logo" }) {
			publicURL
		}
	}
`;
