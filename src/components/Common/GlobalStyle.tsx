import React, { FunctionComponent } from "react";
import { Global, css } from "@emotion/react";

const defaultStyle = css`
	:root {
		// colors
		--background-color: 246, 246, 246;
		--text-color: 30, 33, 38;
		--tag-color: 64, 107, 159;
		--anchor-color: 66, 99, 235;
		--toc-color: 170, 170, 170;
		--accent: 0, 0, 0;
		--dimmed: 112, 112, 112;
		--shade: 232, 232, 232;
		--extreme: 225, 225, 225;

		// z-index
		--z-sticky: 10;
		--z-fixed: 20;

		// container
		--sm-container: 768px;
		--lg-container: 1200px;

		[data-theme="dark"] {
			--background-color: 30, 33, 38;
			--text-color: 246, 246, 246;
			--tag-color: 127, 157, 194;
			--anchor-color: 139, 160, 249;
			--accent: 255, 255, 255;
			--dimmed: 119, 119, 119;
			--shade: 48, 48, 48;
			--extreme: 0, 0, 0;
		}
	}

	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
			Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo",
			"Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji",
			"Segoe UI Symbol", sans-serif;
	}

	main {
		min-height: 100vh;
	}

	html,
	body,
	#___gatsby,
	[data-theme="light"],
	[data-theme="dark"] {
		height: 100%;
		font-size: 16px;
		background-color: rgb(var(--background-color));
		color: rgb(var(--text-color));

		@media (max-width: 768px) {
			font-size: 14px;
		}
	}

	a,
	a:hover {
		color: inherit;
		text-decoration: none;
		cursor: pointer;
	}

	code,
	pre,
	code *,
	pre * {
		font-family: "Fira Mono", source-code-pro, Menlo, Monaco, Consolas,
			"Courier New", monospace;
		font-size: 0.875rem;
	}

	small {
		font-size: 0.875rem;
	}

	img {
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	.grvsc-code {
		width: 100%;
	}
`;

const GlobalStyle: FunctionComponent = function () {
	return <Global styles={defaultStyle} />;
};

export default GlobalStyle;
