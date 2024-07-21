import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";

interface PostContentProps {
	html: string;
}

const TocWrapper = styled.div``;

const TocRenderer = styled.div`
	// Renderer Style

	display: flex;
	flex-direction: column;
	width: 260px;
	max-height: calc(100vh - 80px);
	margin: 60px 80px 30px 0;
	padding: 0;
	position: sticky;
	left: calc(50vw - (768px / 2) - 260px);
	top: 56px;
	word-break: keep-all;
	overflow: hidden auto;

	li {
		list-style: none;
		display: block;
		width: 96%;
		color: rgb(var(--toc-color));
		line-height: 2;
		font-size: 14px;
		font-weight: 500;

		& > a {
			display: block;
			padding: 0.2em 0;
			white-space: break-space;
			line-height: 1.4;
			// overflow: hidden;
			// text-overflow: ellipsis;
		}

		@media (hover: hover) {
			&:hover {
				// font-weight: 700;
				color: rgb(var(--accent)); // rgb(64, 107, 159);
				border-width: 2px;
			}
		}

		// h2 heading
		& > ul > li {
			margin-left: 0.5em;
			padding-left: 1em;
			border-left: 1px solid;

			// h3 heading
			& > ul > li {
				margin-left: 0.5em;
				padding-left: 1em;
				border-left: 1px solid;
			}
		}
	}

	@media (max-width: 1280px) {
		display: none;
	}
`;

const PostContent: FunctionComponent<PostContentProps> = function ({ html }) {
	return (
		<TocWrapper>
			<TocRenderer dangerouslySetInnerHTML={{ __html: html }} />
		</TocWrapper>
	);
};

export default PostContent;
