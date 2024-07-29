import React, { FunctionComponent } from "react";
import Template from "components/Common/Template";
import { graphql } from "gatsby";
import GlobalStyle from "components/Common/GlobalStyle";
import ProjectList from "components/Project/ProjectList";
import {
	ProjectListItemType,
	ProjectThumbnailFileType,
} from "types/ProjectItem.types";
import styled from "@emotion/styled";

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

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	width: var(--lg-container);
	height: 160px;
	margin: 0 auto;

	@media (max-width: 1280px) {
		width: 100%;
		padding: 0 20px;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		height: 100px;
	}
`;

const Title = styled.div`
	margin-bottom: 0.125em;
	font-size: 2.5rem;
	font-weight: 900;

	@media (max-width: 768px) {
		font-size: 2rem;
	}
`;

const SubTitle = styled.div`
	font-size: 1.25rem;
	font-weight: 400;

	@media (max-width: 768px) {
		font-size: 1.25rem;
	}
`;

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
			<Wrapper>
				<div>
					<Title>Projects</Title>
					<SubTitle>: Summary</SubTitle>
				</div>
			</Wrapper>
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
		allFile(
			filter: {
				ext: { in: [".jpg", ".png"] }
				sourceInstanceName: { eq: "projects" }
			}
		) {
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
