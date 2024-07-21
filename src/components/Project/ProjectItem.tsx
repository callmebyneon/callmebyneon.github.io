import styled from "@emotion/styled";
import { Link } from "gatsby";
import React, { FunctionComponent } from "react";
import { ProjectListItemType } from "types/ProjectItem.types";

type ProjectListItemProp = ProjectListItemType & {
	thumbnail: string;
};

const ProjectItemWrapper = styled.div`
	width: 100%;
`;

const ProjectItemInfoCard = styled.div`
	display: flex;
	flex-direction: row;
	align-items: stretch;
	justify-content: flex-start;
	height: 15rem;
	overflow: hidden;
	border-radius: 1rem 1rem 0 1rem;
	border: 1px solid rgba(var(--accent), 0.1);
	background: rgba(var(--accent), 0.02);

	@media (max-width: 1280px) {
		height: 100%;
	}

	@media (max-width: 1080px) {
		min-height: 22rem;
		flex-direction: column;

		&:hover .infoThumbnail img {
			height: fit-content;
		}
	}

	@media (max-width: 768px) {
		height: fit-content;
	}

	@media (hover: hover) {
		&:hover {
			filter: brightness(95%);
			background: rgba(var(--accent), 0.05);

			& .infoThumbnail img {
				filter: brightness(85%);
				transform: translate3D(-50%, -50%, 0) scale(120%);
			}
		}
	}
`;

const ProjectItemThumbnail = styled.div`
	width: 18rem;
	overflow: hidden;
	position: relative;

	& img {
		height: 100%;
		aspect-ratio: 16 / 9;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate3D(-50%, -50%, 0);
		transition: 300ms all;
	}

	@media (max-width: 1080px) {
		width: 100%;
		height: 100%;
		aspect-ratio: 16 / 9;

		& img {
			width: 100%;
			height: fit-content;
		}
	}
`;

const ProjectItemInfo = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 1rem;
	padding: 1rem 8rem 1rem 1.5rem;
	line-height: 1.5em;
	border-left: 1px solid rgba(var(--accent), 0.1);

	@media (max-width: 1280px) {
		gap: 0.5rem;
		padding: 1rem 1.5rem;
	}

	@media (max-width: 1080px) {
		border-left: none;
	}
`;

const DateWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	gap: 0.25rem;
	font-size: 0.875rem;
	letter-spacing: 0.1em;
	color: rgba(var(--text-color), 50%);
`;

const ProjectType = styled.p`
	font-size: 0.875rem;
	letter-spacing: 0.1em;
	text-transform: capitalize;
	color: rgba(var(--text-color), 50%);
`;

const InfoMain = styled.div`
	margin-top: auto;
`;

const Title = styled.div`
	display: block;
	white-space: normal;
	overflow-wrap: break-word;
	-webkit-line-clamp: 2;
	font-size: 1.25rem;
	font-weight: 700;

	@media (min-width: 1280px) {
		margin-bottom: 0.5em;
		font-size: 1.375rem;
	}

	@media (min-width: 768px) {
		white-space: nowrap;
		text-overflow: ellipsis;
	}
`;

const Summary = styled.div`
	display: block;
	text-overflow: ellipsis;
	overflow-wrap: break-word;
	word-break: keep-all;
	white-space: normal;
	font-size: 1rem;
	opacity: 0.8;

	@media (min-width: 1280px) {
		font-size: 1.125rem;
	}
`;

const Skills = styled.div`
	font-size: 0.875rem;
	font-weight: 500;
	color: rgb(var(--tag-color));
`;

const ProjectItemLinks = styled.div`
	margin-left: auto;
	display: flex;
	width: 15rem;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;
	padding: 1rem 1.5rem;
	border-radius: 0 0 1rem 1rem;
	background: rgb(var(--shade));
	border: 1px solid rgba(var(--accent), 0.1);
	border-top-width: 0;
	color: rgb(var(--text-color));

	@media (min-width: 1280px) {
		position: relative;
		z-index: 1;
		margin-top: -2rem;
		border-radius: 1rem 0 1rem 1rem;
		border: 1px solid rgba(var(--accent), 0.1);
	}
`;

const ProjectItemLink = styled.a`
	position: relative;

	&::after {
		content: "";
		width: 0%;
		height: 1em;
		position: absolute;
		left: 0;
		top: 0.25em;
		background-color: rgba(var(--tag-color), 0.2);
		transition: width 200ms ease-in-out;
	}

	&:hover::after {
		width: 100%;
	}

	@media (max-width: 1280px) {
		text-decoration: underline;
	}
`;

const ProjectItem: FunctionComponent<ProjectListItemProp> = function ({
	node: {
		fields: { slug },
		frontmatter: { title, summary, start, end, type, skills, links },
	},
	thumbnail: thumbnailURL,
}) {
	return (
		<ProjectItemWrapper>
			<Link to={slug}>
				<ProjectItemInfoCard>
					<ProjectItemThumbnail className="infoThumbnail">
						<img src={thumbnailURL} alt={title} />
					</ProjectItemThumbnail>
					<ProjectItemInfo>
						<div>
							<DateWrapper>
								<span>{start}</span>
								<span>–</span>
								<span>{end}</span>
							</DateWrapper>
							<ProjectType>{type} project</ProjectType>
						</div>
						<InfoMain>
							<Title>{title}</Title>
							<Summary>{summary}</Summary>
						</InfoMain>
						<Skills>프론트엔드 기술 스택 : {skills.join(", ")}</Skills>
					</ProjectItemInfo>
				</ProjectItemInfoCard>
			</Link>
			<ProjectItemLinks>
				{links.map(link => (
					<ProjectItemLink
						key={link.href}
						rel="noopener"
						target="_blank"
						href={link.href}
					>
						<span>{link.name} ↗</span>
					</ProjectItemLink>
				))}
			</ProjectItemLinks>
		</ProjectItemWrapper>
	);
};

export default ProjectItem;
