import React, { FunctionComponent, ReactNode } from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

type CategoryItemProps = {
	active: boolean;
};

type GatsbyLinkProps = {
	children: ReactNode;
	className?: string;
	to: string;
} & CategoryItemProps;

export type CategoryListProps = {
	selectedCategory: string;
	categoryList: {
		[key: string]: number;
	};
};

const CategoryListWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: var(--sm-container);
	margin: 20px auto 0;

	@media (max-width: 768px) {
		width: 100%;
		position: sticky;
		top: 0;
		margin-top: 30px;
		padding: 20px;
		background: rgb(var(--background-color));
		z-index: var(--z-sticky);

		&:after {
			content: "";
			display: block;
			position: absolute;
			bottom: -48px;
			left: 0;
			width: 100%;
			height: 50px;
			background: linear-gradient(
				to bottom,
				rgb(var(--background-color)),
				rgba(var(--background-color), 0)
			);
		}
	}
`;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
	<Link {...props} />
))`
	margin-right: 8px;
	margin-bottom: 8px;
	padding: 4px 8px;
	font-size: 16px;
	letter-spacing: 0.2px;
	font-weight: ${({ active }) => (active ? "700" : "400")};
	background: ${({ active }) =>
		active ? "rgb(var(--accent))" : "rgb(var(--dimmed))"};
	border-radius: 4px;
	color: rgb(var(--background-color));
	cursor: pointer;

	&:last-of-type {
		margin-right: 0;
	}

	@media (hover: hover) {
		&:hover {
			color: rgb(var(--background-color));
			background-color: rgb(var(--accent));
		}
	}

	@media (max-width: 768px) {
		margin-right: 4px;
		margin-bottom: 4px;
		font-size: 1.15rem;

		&:hover {
			color: rgb(var(--background-color));
			background: inherit;
		}
	}
`;

const CategoryList: FunctionComponent<CategoryListProps> = function ({
	selectedCategory,
	categoryList,
}) {
	return (
		<CategoryListWrapper>
			{Object.entries(categoryList).map(([name, count]) => (
				<CategoryItem
					to={`/?category=${name}`}
					active={name === selectedCategory}
					key={name}
				>
					{name}({count})
				</CategoryItem>
			))}
		</CategoryListWrapper>
	);
};

export default CategoryList;
