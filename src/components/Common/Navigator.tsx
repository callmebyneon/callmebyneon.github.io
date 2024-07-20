import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import ThemeToggleButton from "./ThemeToggleButton";

const NavigatorWrapper = styled.nav`
	display: block;
	width: 100%;
`;

const NavLinks = styled.div`
	display: flex;
	gap: 2.5rem;
	width: var(--lg-container);
	margin: 0 auto;
	height: 100px;
	align-items: center;
	justify-content: flex-end;

	& > a {
		display: block;
		font-size: 1.25rem;
		font-weight: 700;
		border-bottom: 1px solid;

		& svg {
			font-size: 0.8em;
		}
	}

	@media (max-width: 1200px) {
		width: 100%;
		padding: 2rem;
	}

	@media (max-width: var(--sm-container)) {
		width: 100%;
		height: 80px;
		justify-content: flex-start;

		& > a {
			margin-left: 0;
			margin-right: 2em;
		}
	}
`;

const Navigator: FunctionComponent = function () {
	return (
		<NavigatorWrapper>
			<NavLinks>
				<Link to="/">Blog</Link>
				<Link to="/projects">Project</Link>
				<a
					rel="noopener"
					href="https://github.com/callmebyneon"
					target="_blank"
				>
					Github ↗
				</a>
				<ThemeToggleButton />
			</NavLinks>
		</NavigatorWrapper>
	);
};

export default Navigator;
