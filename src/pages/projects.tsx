import React, { FunctionComponent } from "react";
import Template from "components/Common/Template";
import { graphql } from "gatsby";
import GlobalStyle from "components/Common/GlobalStyle";
import ProjectList from "components/Project/ProjectList";
import {
	ProjectListItemType,
	ProjectThumbnailFileType,
} from "types/ProjectItem.types";

interface PortfolioPageProps {
	data: {
		site: {
			siteMetadata: {
				title: string;
				description: string;
				siteUrl: string;
			};
		};
		file: {
			publicURL: string;
		};
		allFile: {
			edges: ProjectThumbnailFileType[];
		};
		allMarkdownRemark: {
			edges: ProjectListItemType[];
		};
	};
}

const PortfolioPage: FunctionComponent<PortfolioPageProps> = ({
	data: {
		site: {
			siteMetadata: { title, description, siteUrl },
		},
		file: { publicURL },
		allFile: { edges: images },
		allMarkdownRemark: { edges },
	},
}) => {
	return (
		<Template
			title={title}
			description={description}
			url={siteUrl}
			image={publicURL}
		>
			<GlobalStyle />
			<ProjectList items={edges} images={images} />
		</Template>
	);
};

export default PortfolioPage;

export const getPageInfo = graphql`
	query getPageInfo {
		site {
			siteMetadata {
				title
				description
				siteUrl
			}
		}
		file(name: { eq: "logo" }) {
			childImageSharp {
				gatsbyImageData(width: 120, height: 120)
			}
			publicURL
		}
		allFile(filter: {ext: {eq: ".jpg"}, name: {regex: "/(project__)\\w+/"}}) {
			edges {
				node {
					name
					publicURL
				}
			}
		}
		allMarkdownRemark(
			filter: { fields: { dir: { eq: "project" } } }
			sort: { order: DESC, fields: [frontmatter___end, frontmatter___start] }
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
						start(formatString: "YYYY.MM")
						end(formatString: "YYYY.MM")
						type
						skills
						thumbnail
						emoji
						links {
							name
							href
						}
					}
				}
			}
		}
	}
`;
