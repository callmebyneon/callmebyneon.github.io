import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import "gatsby-remark-vscode/styles.css";

interface PostContentProps {
	html: string;
}

const MarkdownWrapper = styled.div`
	width: 100%;
	margin: 0;
`;

const MarkdownRenderer = styled.div`
	// Renderer Style
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 0;
	padding: 0;
	word-break: keep-all;
	white-space: break-space;

	// Markdown Style
	line-height: 1.8;
	font-size: 1rem;
	font-weight: 400;

	// Apply Padding Attribute to All Elements
	p {
		padding: 0.8em 0;
	}

	// Adjust Heading Element Style
	h1,
	h2,
	h3 {
		font-weight: 700;
		margin-bottom: 1em;
	}

	* + h1,
	* + h2,
	* + h3 {
		padding-top: 2.5em;
	}

	hr + h1,
	hr + h2,
	hr + h3 {
		padding-top: 0;
	}

	h1 + :is(ol, ul),
	h2 + :is(ol, ul),
	h3 + :is(ol, ul) {
		padding: 0;
	}

	h1 {
		font-size: 1.875rem;
	}

	h2 {
		font-size: 1.5rem;
	}

	h3 {
		font-size: 1.25rem;
	}

	// Adjust Quotation Element Style
	blockquote {
		margin: 30px 0;
		padding: 5px 15px;
		background: rgba(var(--accent), 0.03);
		border-left: 2px solid rgba(var(--accent));
		font-weight: 700;
	}

	// Adjust List Element Style
	ol,
	ul {
		margin-left: 20px;
		padding: 20px 0;
	}

	li {
		width: 100%;

		& > ul,
		& > p + * {
			padding: 8px 0;
		}

		& > pre[data-language] {
			margin: 8px 0;
		}
	}

	// Adjust Horizontal Rule style
	hr {
		// border: 1px solid rgba(var(--accent));
		margin: 100px 0;
		opacity: 75%;
	}

	// Adjust Link Element Style
	a {
		display: inline;
		width: 100%;
		color: rgb(var(--anchor-color));
		text-decoration: underline;
		overflow-wrap: anywhere;
		word-break: break-word;

		&.anchor.after {
			display: inline;
		}
	}

	// Adjust Code Style
	pre[data-language] {
		margin: 30px 0;
		// padding: 15px 20px;
		border-radius: 12px;
		overflow: auto;

		::-webkit-scrollbar-thumb {
			background: rgba(var(--extreme), 0.5);
			border-radius: 3px;
		}

		.line-numbers-rows {
			padding: 1em 0;
			padding-left: 8px;
		}
	}

	& :not(pre) > code {
		padding: 1px 6px;
		border-radius: 4px;
		background: rgb(var(--text-color));
		color: rgb(var(--background-color));
	}

	code,
	pre {
		tab-size: 2;
		// font-size: 0.875rem;
		// font-family: 'Fira Mono', monospace;
	}

	kbd {
		font-weight: 300;
		font-size: 0.875rem;
		padding: 1px 6px 2px;
		border-radius: 4px;
		border: 1px solid rgba(var(--text-color), 60%);
		border-bottom-width: 2px;
	}

	img {
		max-width: 100%;
		border-radius: 8px;
	}

	figure {
		& figcaption {
			margin-bottom: 1rem;
			text-align: center;
			font-size: 0.875rem;
			opacity: 0.8;
		}
	}

	table {
		border-collapse: collapse;
	}

	thead {
		background-color: rgb(var(--shade));
	}

	tr {
		border-bottom: 1px solid rgb(var(--shade));
	}

	th,
	td {
		padding: 2px 8px;
		word-break: keep-all;

		&:not(:last-child) {
			border-right: 1px solid rgb(var(--shade));
		}
	}

	// Markdown Responsive Design
	@media (max-width: 768px) {
		width: 100%;
		padding: 80px 20px;
		line-height: 1.6;

		h1 {
			font-size: 23px;
		}

		h2 {
			font-size: 20px;
		}

		h3 {
			font-size: 17px;
		}

		img {
			width: 100%;
		}

		hr {
			margin: 3.5714rem 0;
		}
	}
`;

const PostContent: FunctionComponent<PostContentProps> = function ({ html }) {
	return (
		<MarkdownWrapper>
			<MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
		</MarkdownWrapper>
	);
};

export default PostContent;
