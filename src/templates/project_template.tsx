import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import Template from "components/Common/Template";
import BottomNav from "components/Common/BottomNav";
import PostTOC from "../components/Post/PostTOC";
import PostContent from "components/Post/PostContent";
import { ProjectPageItemType } from "types/ProjectItem.types";
import styled from "@emotion/styled";
import ProjectHead from "components/Project/ProjectHead";

type ProjectTemplateProps = {
	data: {
		allMarkdownRemark: {
			edges: ProjectPageItemType[];
		};
	};
	location: {
		href: string;
	};
};

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-bottom: 80px;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 5rem;
	width: var(--sm-container);
	margin: 0;

	@media (max-width: 1080px) {
		width: calc(100vw - 24px * 2);
	}

	@media (max-width: 768px) {
		gap: 1rem;
		max-width: 100%;
	}
`;

const ProjectTemplate: FunctionComponent<ProjectTemplateProps> = function ({
	data: {
		allMarkdownRemark: { edges },
	},
	location: { href },
}) {
	const {
		node: {
			html,
			tableOfContents,
			frontmatter: { title, summary, start, end, type, emoji, links },
		},
	} = edges[0];
	return (
		<Template title={title} description={summary} url={href} image={emoji}>
			<ContentWrapper>
				<PostTOC html={tableOfContents} />
				<Content>
					<ProjectHead
						title={title}
						summary={summary}
						start={start}
						end={end}
						type={type}
						links={links}
					/>
					<PostContent html={html} />
				</Content>
			</ContentWrapper>
			<BottomNav />
		</Template>
	);
};

export default ProjectTemplate;

export const queryMarkdownDataBySlug = graphql`
	query queryMarkdownDataBySlug($slug: String) {
		allMarkdownRemark(
			filter: { fields: { slug: { eq: $slug }, dir: { eq: "project" } } }
		) {
			edges {
				node {
					html
					tableOfContents(maxDepth: 3)
					frontmatter {
						title
						summary
						start(formatString: "YYYY.MM.DD")
						end(formatString: "YYYY.MM.DD")
						type
						skills
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
