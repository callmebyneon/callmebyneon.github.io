import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import ProjectItem from "./ProjectItem";
import {
	ProjectListItemType,
	ProjectThumbnailFileType,
} from "types/ProjectItem.types";

interface ProjectListProps {
	items: ProjectListItemType[];
	images: ProjectThumbnailFileType[];
}

const ProjectListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
	width: var(--lg-container);
	margin: 0 auto;
	padding: 50px 0 100px;

	@media (max-width: 1080px) {
		gap: 52px;
	}

	@media (max-width: 1280px) {
		width: 100%;
		padding: 50px 20px;
	}
`;

const ProjectList: FunctionComponent<ProjectListProps> = function ({
	items,
	images,
}) {
	return (
		<ProjectListWrapper>
			{items.map(({ node }) => {
				const thumbanilURL =
					images.find(
						({ node: { name } }) => name === node.frontmatter.thumbnail,
					)?.node.publicURL || "";
				return (
					<ProjectItem key={node.id} node={node} thumbnail={thumbanilURL} />
				);
			})}
		</ProjectListWrapper>
	);
};

export default ProjectList;
