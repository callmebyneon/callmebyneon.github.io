import styled from "@emotion/styled";
import { FunctionComponent } from "react";
import { ProjectFrontmatterType } from "types/ProjectItem.types";
import getDateRange from "../../util/getDateRange";
import getProjectDate from "../../util/getProjectDate";

type ProjectHeadProps = Pick<
	ProjectFrontmatterType,
	"title" | "summary" | "start" | "end" | "type" | "links"
>;

const HeadWrapper = styled.div`
	width: 100%;
	margin: 2.5rem 0;
`;

const HeadInfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	padding: 1.125rem 0;
	color: rgb(var(--accent));

	@media (max-width: 1200px) {
		width: var(--sm-container);
		padding: 2.5rem 1.125rem;
	}

	@media (max-width: 1080px) {
		width: 100%;
	}
`;

const Small = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 1em;
	margin-bottom: 1em;
	font-size: 0.875rem;
	letter-spacing: 0.1em;
	text-transform: capitalize;
`;

const Duration = styled.div`
	color: rgba(var(--text-color), 75%);
`;

const Dimmed = styled.span`
	color: rgba(var(--text-color), 50%);
`;

const Title = styled.div`
	overflow-wrap: break-word;
	margin-bottom: 0.5em;
	font-size: 2.8125rem;
	font-weight: 700;
	word-break: keep-all;

	@media (max-width: 768px) {
		font-size: 1.875rem;
	}
`;

const Summary = styled.div`
	overflow-wrap: break-word;
	margin-bottom: 0.5em;
	font-size: 1.25rem;
	font-weight: 400;
	line-height: 1.25em;
	word-break: keep-all;
	color: rgba(var(--text-color), 85%);
`;

const LinksWrapper = styled.div`
	display: flex;
	gap: 1rem;
	padding: 2rem;
	border-radius: 0 1rem 0 1rem;
	border: 1px solid rgba(var(--text-color), 10%);
	background: rgba(var(--accent), 0.02);
	transition: background 200ms;

	@media (max-width: 1200px) {
		margin: 2.5rem 1.125rem 0;
	}

	@media (hover: hover) {
		&:hover {
			background: rgba(var(--accent), 0);
		}
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
`;

const ProjectHead: FunctionComponent<ProjectHeadProps> = function ({
	title,
	summary,
	start,
	end,
	type,
	links,
}) {
	const startDate = getProjectDate(start);
	const endDate = getProjectDate(end);
	const duration = getDateRange({ start, end });
	return (
		<div>
			<HeadWrapper>
				<HeadInfoWrapper>
					<Small>
						<Duration>
							{startDate} - {endDate}
						</Duration>
						<Dimmed>(총 {duration})</Dimmed>·<Dimmed>{type} project</Dimmed>
					</Small>
					<Title>{title}</Title>
					<Summary>{summary}</Summary>
				</HeadInfoWrapper>
			</HeadWrapper>
			<LinksWrapper>
				<Dimmed>Links</Dimmed>
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
			</LinksWrapper>
		</div>
	);
};

export default ProjectHead;
