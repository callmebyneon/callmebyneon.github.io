import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import PostItem from "components/Main/PostItem";
import { PostListItemType } from "types/PostItem.types";
import useInfiniteScroll, {
	useInfiniteScrollType,
} from "hooks/useInfiniteScroll";

function NoPostBox() {
	const NotFoundDescription = styled.div`
		font-size: 1.5rem;
		font-weight: 700;
		text-align: center;
		line-height: 1.3;
		color: rgb(var(--dimmed));
	`;

	return (
		<NotFoundDescription>
			Sorry, this category is not exist.
			<br />
			Find another one.
		</NotFoundDescription>
	);
}

type PostListProps = {
	selectedCategory: string;
	posts: PostListItemType[];
};

const PostListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: var(--lg-container);
	margin: 0 auto;
	padding: 50px 0 100px;

	@media (max-width: 1280px) {
		width: 100%;
		padding: 50px 20px;
	}
`;

const PostList: FunctionComponent<PostListProps> = function ({
	selectedCategory,
	posts,
}) {
	const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
		selectedCategory,
		posts,
	);

	return (
		<PostListWrapper ref={containerRef}>
			{postList.length <= 0 ? (
				<NoPostBox />
			) : (
				postList.map(
					({
						node: {
							id,
							fields: { slug },
							frontmatter,
						},
					}: PostListItemType) => (
						<PostItem {...frontmatter} link={slug} key={id} />
					),
				)
			)}
		</PostListWrapper>
	);
};

export default PostList;
